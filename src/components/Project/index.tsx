import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import {FaGithub} from "react-icons/fa";
import defineImage from "../../utils/defineImage";
import { MdOutlineSearchOff } from "react-icons/md";

interface IRepoData {
	name: string;
	html_url: string;
	description: string
}

export function Project ({ name, html_url, description }: IRepoData) {
	const [image, setImage] = useState("");

	console.log(name);
	const imageName = defineImage(name);

	setImage(imageName);

	return (
		<section className={style.sectionContainer}>

			<a href={html_url} rel="noreferrer" target="_blank" title={`Redirecionar para o repositorio ${name}`} className={style.contentContainer}>

				<header className={style.headerContainer}>
					<p>&bull;</p>
					<p>&bull;</p>
					<p>&bull;</p>
				</header>

				{ image !== "notFound" ? <img src={`../../../assets${image}`} alt="" /> : <MdOutlineSearchOff />}


				<h2>{name}</h2>

				<abbr title={description ? description : "Desculpe! parece que esse repositório não tem uma descrição :("} className={style.text}> { description ? description : "Desculpe! parece que esse repositório não tem uma descrição :(" } </abbr>
			</a>
			<footer>
				<FaGithub size={40} color="#060608" />
			</footer>
		</section>
	);
}
