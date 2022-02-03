import React from "react";
import { Menu } from "../../components";
import style from "./style.module.scss";
import Vector from "../../../assets/vector.png";
import Html from "../../../assets/html.png";
import Css from "../../../assets/css.png";
import { SiJavascript, BsTrophy, GoClippy } from "react-icons/all";

export function Stacks () {


	return (
		<div className={style.container}>
			<Menu />

			<h1>Stacks</h1>

			<main>
				<div className={style.imageBackgroundContainer}>
					<img src={Vector} alt="Imagem de fundo em formato de ameba" />
					<img src={Vector} alt="Imagem de fundo em formato de ameba" />
				</div>

				<section className={style.sectionContainer}>
					<div >
						<div className={style.projectContainer}>
							<SiJavascript size={80} color="yellow" style={{backgroundColor: "#000000"}} />
							<div className={style.projectInformationContainer}>
								<span>
									<BsTrophy size={50} color="#23BE53" style={{padding: "1rem", border: "0.1rem solid #23BE53", borderRadius: "48%"}} />
									<p>1 Ano e 6 meses</p>
								</span>
								<span>
									<GoClippy size={50} color="#23BE53" style={{padding: "1rem", border: "0.1rem solid #23BE53", borderRadius: "48%"}}  />
									<p>20 projetos</p>
								</span>
							</div>
						</div>
						<footer className={style.projectFooter}></footer>
					</div>

					<div>
						<img src={Html} alt="Html Icon" />
						<div className={style.projectInformationContainer}>
							<span>
								<BsTrophy size={50} color="#23BE53" style={{padding: "1rem", border: "0.1rem solid #23BE53", borderRadius: "48%"}} />
								<p>1 Ano e 6 meses</p>
							</span>
							<span>
								<GoClippy size={50} color="#23BE53" style={{padding: "1rem", border: "0.1rem solid #23BE53", borderRadius: "48%"}}  />
								<p>20 projetos</p>
							</span>
						</div>
					</div>

					<div>
						<img src={Css} alt="Css icon" />
						<div className={style.projectInformationContainer}>
							<span>
								<BsTrophy size={50} color="#23BE53" style={{padding: "1rem", border: "0.1rem solid #23BE53", borderRadius: "48%"}} />
								<p>1 Ano e 6 meses</p>
							</span>
							<span>
								<GoClippy size={50} color="#23BE53" style={{padding: "1rem", border: "0.1rem solid #23BE53", borderRadius: "48%"}}  />
								<p>20 projetos</p>
							</span>
						</div>
					</div>
				</section>


				<section>
					<div>
						<img src="" alt="" />
						<div>
							<span>

							</span>
							<span>

							</span>
						</div>
					</div>

					<div>
						<img src="" alt="" />
						<div>
							<span>

							</span>
							<span>

							</span>
						</div>
					</div>

					<div>
						<img src="" alt="" />
						<div>
							<span>

							</span>
							<span>

							</span>
						</div>
					</div>
				</section>
			</main>

		</div>
	);
}
