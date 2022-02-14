import React, { useEffect, useState } from "react";
import { Footer, Header, PaginationButton, PaginationSelector, Project } from "../../components";
import style from "./style.module.scss";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import defineImage from "../../utils/defineImage";
import { useQuery } from "react-query";

interface IRepoType {
	name: string;
	html_url: string;
	description: string;
	archived: boolean;
}

export function Projects () {
	const [repo, setRepo] = useState<IRepoType[]>([]);
	const navigate = useNavigate();

	const [ itensPerPage, setItensPerPage ] = useState(9);
	const [ currentPage, setCurrentPage ] = useState(0);

	const pages = Math.ceil(repo.length / itensPerPage);
	const startIndex = currentPage * itensPerPage;
	const endIndex = startIndex +itensPerPage;
	const currentItens = repo.slice(startIndex, endIndex);


	const { data, isError, isFetching } = useQuery("repos", async () => {

		const { data } = await api.get<IRepoType[]>("josejonathan7/repos?page=1&per_page=50");

		const repoData = data.filter(value => value.archived !== true);

		return repoData;
	}, {
		staleTime: 1000 * 600 //1 minuto
	});

	useEffect(() => {
		if(isError) {
			alert("Limite de consultas diária ao github atingida");
			navigate("/");
		}

		if(typeof data !== "undefined"){
			setRepo(data);
		}
	});

	useEffect(() => setCurrentPage(0), [itensPerPage]);


	if(isFetching) {
		return <h1>Carregando...</h1>;
	}

	const projectRender = (value: IRepoType, index: number) => {
		const imageName = defineImage(value.name);

		return (
			<Project key={`Project-${index}`} name={value.name} html_url={value.html_url} description={value.description} image={imageName} />
		);
	};

	return (
		<div className={style.container}>
			<Header />

			<h1>Projects</h1>

			<div className={style.paginationContainer}>
				<PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
				<PaginationButton setCurrentPage={setCurrentPage} pages={pages} />
			</div>

			<main className={style.mainContainer}>

				{currentItens.map(projectRender)}

			</main>

			<div className={style.paginationContainer}>
				<PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
				<PaginationButton setCurrentPage={setCurrentPage} pages={pages} />
			</div>

			<Footer />
		</div>
	);
}
