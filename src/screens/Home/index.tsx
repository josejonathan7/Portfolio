import React from "react";
import { Menu } from "../../components";
import style from "./style.module.scss";

export function Home() {

	return (
		<div className={style.container}>
			<Menu />

			<main className={style.mainContainer}>
				<section className={style.textSectionContainer}>
					<h2>Desenvolvedor Front-End</h2>

					<div>
						<h1>José Jonathan</h1>
						<p>Bem vindo ao meu mundo. Aqui é onde mostro todas as minhas experiencias e minha paixão que é, desenvover. Bora trocar conhecimento!</p>
						<button>My Cv</button>
					</div>
				</section>

				<section className={style.imageSectionContainer}>

				</section>


			</main>

		</div>
	);
}
