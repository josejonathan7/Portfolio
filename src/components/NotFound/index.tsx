import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

export function NotFound () {
	const navigate = useNavigate();

	useEffect(() => {
		alert("Página não encontrada!");
		navigate("/");
	});



	return (
		<div className={style.container}>
			<p>404 Pagina não encontrada! Clique no ok para voltar para a página Home.</p>
		</div>
	);
}
