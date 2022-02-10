import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import style from "./style.module.scss";

export function Header () {
	const navigate = useNavigate();

	return (
		<header className={style.container}>
			<div className={style.imageContainer}>
				<img src={Logo} alt="Logo da aplicação" onClick={() => navigate("/")} title="redirecionar para página inicial" />
			</div>

			<div className={style.textContainer}>
				<div>
					<button onClick={() => navigate("/stacks")} title="redirecionar para a página stacks">Stacks</button>
					<button onClick={() => navigate("/projects")} title="redirecionar para a página de projetos">Projects</button>
					<button onClick={() => navigate("/about")} title="redirecionar para a página about me">About Me</button>
				</div>

				<a href="https://www.linkedin.com/in/jos%C3%A9-jonathan-6abaa4206/" target="_blank" rel="noreferrer" className={style.link} title="entrar em contato" >Contact</a>
			</div>
		</header>
	);
}
