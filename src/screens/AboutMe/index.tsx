import React from "react";
import { Header } from "../../components";
import style from "./style.module.scss";
import { SiJavascript,  SiTypescript, FaNodeJs, SiPostgresql, DiReact, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/all";
import Logo from "../../../assets/logo.png";

export function AboutMe () {

	return (
		<div className={style.container}>

			<Header />

			<h1>About Me</h1>

			<main className={style.mainContainer}>
				<section className={style.sectionContainer}>

					<h2>José Jonathan</h2>

					<div className={style.textIconContainer}>

						<div className={style.textContainer}>
							<p>ola meu nome é José Jonathan. Sou desenvolvedor FullStack, minha maior experiência é em desenvolvimento de Backend, mas também faço front com React.</p>

							<ul className={style.listContainer}>
								<li>Frontend</li>
								<li>Backend</li>

							</ul>
						</div>

						<div className={style.iconsContainer}>
							<SiTypescript size={60} color="#00BFFF" style={{backgroundColor: "#000000"}} />
							<FaNodeJs size={60} color="#008000" />
							<SiPostgresql size={60} color="#1E90FF" />
							<DiReact size={60} color="#1E90FF"  />
							<SiJavascript size={60} color="#FFFF00" style={{backgroundColor: "#000000"}} />
						</div>
					</div>
				</section>
				<footer className={style.mainFooter}></footer>
			</main>

			<footer className={style.footercontainer}>
				<div className={style.footerImageContainer}>
					<img src={Logo} alt="Logo da aplicação" title="redirecionar para página inicial" />
				</div>

				<p>Feito com dedicação por José Jonathan</p>

				<div className={style.footerButtonsContainer}>
					<a href="https://www.facebook.com/dhione.jonathan/" rel="noreferrer" target="_blank" title="redirecionar para o facebook">
						<FaFacebookF  size={40} color="#FFFFFF" />
					</a>
					<a href="https://www.linkedin.com/in/jos%C3%A9-jonathan-6abaa4206/" rel="noreferrer" target="_blank" title="redirecioanr para o linkedin">
						<FaLinkedinIn size={40} color="#FFFFFF" />
					</a>
					<a href="https://github.com/josejonathan7" rel="noreferrer" target="_blank" title="redirecionar para o github">
						<FaGithub size={40} color="#FFFFFF" />
					</a>
				</div>
			</footer>

		</div>
	);
}
