import React from "react";
import { Footer, Header, StacksInformation } from "../../components";
import style from "./style.module.scss";
import Vector from "../../../assets/vector.png";


export function Stacks () {


	return (
		<div className={style.container}>
			<Header />

			<h1>Stacks</h1>

			<main className={style.mainContainer}>
				<div className={style.imageBackgroundContainer}>
					<img src={Vector} alt="Imagem de fundo em formato de ameba" />
					<img src={Vector} alt="Imagem de fundo em formato de ameba" />
				</div>

				<div className={style.imageBackgroundContainerTwo}>
					<img src={Vector} alt="Imagem de fundo em formato de ameba" />
					<img src={Vector} alt="Imagem de fundo em formato de ameba" />
				</div>

				<StacksInformation />

			</main>

			<Footer />

		</div>
	);
}
