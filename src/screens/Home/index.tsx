import React from "react";
import { Presentation, Footer, Header } from "../../components";
import style from "./style.module.scss";
import Vector from "../../../assets/vector.png";
import Css from "../../../assets/css.png";
import Html from "../../../assets/html.png";
import Js from "../../../assets/JS.png";
import ImageTop from "../../../assets/image-top.png";


export function Home() {


	return (
		<div className={style.container}>
			<Header />

			<main className={style.mainContainer}>

				<Presentation />

				<section className={style.imageSectionContainer}>

					<div className={style.HtmlCssImageContainer}>
						<img src={Html} alt="Html icon image" />
						<img src={Css} alt="Css icon image" />
					</div>



					<div className= {style.vectorImageContainer}>
						<img src={ImageTop} alt="outra imagem com texto dizendo html e css" />
						<img src={Vector} alt="imagem de fundo" />
						<img src={Js} alt="JavaScript icon image" />
					</div>

				</section>


			</main>

			<Footer />

		</div>
	);
}
