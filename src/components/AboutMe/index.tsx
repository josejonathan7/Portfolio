import React from "react";
import style from "./style.module.scss";

export function AboutMe () {


	return (
		<section className={style.textSectionContainer}>
			<h2>Desenvolvedor Front-End</h2>

			<div className={style.textDiv}>
				<h1>José Jonathan</h1>
				<p>Bem vindo ao meu mundo. Aqui é onde mostro todas as minhas experiencias e minha paixão que é, desenvover. Bora trocar conhecimento!</p>

				<button className={style.button}>My Cv</button>
			</div>
		</section>
	);
}
