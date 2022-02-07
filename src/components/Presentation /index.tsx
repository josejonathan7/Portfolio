import React from "react";
import style from "./style.module.scss";

export function Presentation  () {


	return (
		<section className={style.textSectionContainer}>
			<h2>Desenvolvedor FullStack</h2>

			<div className={style.textDiv}>
				<h1>José Jonathan</h1>
				<p>Bem vindo ao meu mundo. Aqui é onde mostro todas as minhas experiencias e minha paixão que é, desenvover. Bora trocar conhecimento!</p>

				<a href="https://my.indeed.com/p/josj-sbjjjlz" rel="noreferrer" target="_blank" title="redirecionar para o site Indeed para visualizar curriculo" className={style.link}>My Cv</a>
			</div>
		</section>
	);
}
