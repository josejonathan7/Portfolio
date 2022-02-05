import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

export function Footer () {

	return (
		<footer className={style.footerContainer}>
			<a href="https://www.facebook.com/dhione.jonathan/" rel="noreferrer" target="_blank" title="redirecionar para o facebook">
				<FaFacebookF  size={40} color="#FFFFFF" />
			</a>
			<a href="https://www.linkedin.com/in/jos%C3%A9-jonathan-6abaa4206/" rel="noreferrer" target="_blank" title="redirecioanr para o linkedin">
				<FaLinkedinIn size={40} color="#FFFFFF" />
			</a>
			<a href="https://github.com/josejonathan7" rel="noreferrer" target="_blank" title="redirecionar para o github">
				<FaGithub size={40} color="#FFFFFF" />
			</a>
		</footer>
	);
}
