import React, { useEffect, useState } from "react";
import { Footer, Header, PaginationButton, PaginationSelector, Project } from "../../components";
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

	const [ itensPerPage, setItensPerPage ] = useState(6);
	const [ currentPage, setCurrentPage ] = useState(0);

	const pages = Math.ceil(repo.length / itensPerPage);
	const startIndex = currentPage * itensPerPage;
	const endIndex = startIndex +itensPerPage;
	const currentItens = repo.slice(startIndex, endIndex);

	useEffect(() => {

		api.get<IRepoType[]>("josejonathan7/repos").then(({data}) => {
			const repoData = data.map(value => {
				return {
					name: value.name,
					html_url: value.html_url,
					description: value.description
				};
			});

			setRepo(repoData);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		}).catch((result: unknown) => {
			alert("Limite de consultas diária ao github atingida");
			navigate("/");
		});


	}, []);

	useEffect(() => setCurrentPage(0), [itensPerPage]);

	const projectRender = (value: IRepoType) => {

		return (
			<Project name={value.name} html_url={value.html_url} description={value.description} />
		);
	};

	return (
		<div className={style.container}>
			<Header />

			<h1>Projects</h1>

			<PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
			<PaginationButton setCurrentPage={setCurrentPage} pages={pages} />

			<main className={style.mainContainer}>

				{currentItens.map(projectRender)}

			</main>

			<Footer />
		</div>
	);
}
