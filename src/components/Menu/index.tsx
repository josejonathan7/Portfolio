import React from "react";
import Logo from "../../../assets/logo.png";
import style from "./style.module.scss";

export function Menu () {

	return (
		<header className={style.container}>
			<div className={style.imageContainer}>
				<img src={Logo} alt="Logo da aplicação" />
			</div>

			<div className={style.textContainer}>
				<div>
					<p>Stacks</p>
					<p>Projects</p>
					<p>About Me</p>
				</div>

				<button className={style.button}>Contact</button>
			</div>
		</header>
	);
}
