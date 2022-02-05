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

				<button className={style.button} title="entrar em contato" >Contact</button>
			</div>
		</header>
	);
}
