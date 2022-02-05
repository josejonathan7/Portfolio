import React, { useEffect, useState } from "react";
import { Footer, Header, Project } from "../../components";
import style from "./style.module.scss";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface IRepoType {
	name: string;
	html_url: string;
	description: string
}

export function Projects () {
	const [repo, setRepo] = useState<IRepoType[]>([]);
	const navigate = useNavigate();

	useEffect(() => {

		async function load() {
			api.get<IRepoType[]>("josejonathan7/repos").then(result => {
				console.log(result.data);
				setRepo(result.data);
			}).catch(result => {
				alert("Limite de consultas diária ao github atingida");
				navigate("/");
			});
		}

		load();
	}, []);


	return (
		<div className={style.container}>
			<Header />

			<h1>Projects</h1>

			<main className={style.mainContainer}>

				{repo.map(value => {
					<Project name={value.name} html_url={value.html_url} description={value.description} />;
				})}

			</main>

			<Footer />
		</div>
	);
}
