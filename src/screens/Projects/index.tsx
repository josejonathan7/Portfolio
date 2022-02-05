import React from "react";
import {FaGithub} from "react-icons/fa";
import { Footer, Header } from "../../components";
import style from "./style.module.scss";
import Css from "../../../assets/css.png";
import Playlist from "../../../assets/playlistProject.png";
import Fone from "../../../assets/foneProject.png";

export function Projects () {

	return (
		<div className={style.container}>
			<Header />

			<h1>Projects</h1>

			<main className={style.mainContainer}>
				<section className={style.sectionContainer}>

					<div className={style.contentContainer}>

						<header className={style.headerContainer}>
							<p>&bull;</p>
							<p>&bull;</p>
							<p>&bull;</p>
						</header>
						<img src={Playlist} alt="" />

						<h2>Page tal</h2>

						<p className={style.text}>página para fazer tal coisa</p>
					</div>
					<footer>
						<FaGithub size={40} color="#060608" />
					</footer>
				</section>

				<section className={style.sectionContainer}>

					<div className={style.contentContainer}>

						<header className={style.headerContainer}>
							<p>&bull;</p>
							<p>&bull;</p>
							<p>&bull;</p>
						</header>
						<img src={Fone} alt="" />

						<h2>Page tal</h2>

						<p className={style.text}>página para fazer tal coisa</p>
					</div>
					<footer>
						<FaGithub size={40} color="#060608" />
					</footer>
				</section>
				<section className={style.sectionContainer}>

					<div className={style.contentContainer}>

						<header className={style.headerContainer}>
							<p>&bull;</p>
							<p>&bull;</p>
							<p>&bull;</p>
						</header>
						<img src={Playlist} alt="" />

						<h2>Page tal</h2>

						<p className={style.text}>página para fazer tal coisa</p>
					</div>
					<footer>
						<FaGithub size={40} color="#060608" />
					</footer>
				</section>

				<section className={style.sectionContainer}>

					<div className={style.contentContainer}>

						<header className={style.headerContainer}>
							<p>&bull;</p>
							<p>&bull;</p>
							<p>&bull;</p>
						</header>
						<img src={Css} alt="" />

						<h2>Page tal</h2>

						<p className={style.text}>página para fazer tal coisa</p>
					</div>
					<footer>
						<FaGithub size={40} color="#060608" />
					</footer>
				</section>

				<section className={style.sectionContainer}>

					<div className={style.contentContainer}>

						<header className={style.headerContainer}>
							<p>&bull;</p>
							<p>&bull;</p>
							<p>&bull;</p>
						</header>
						<img src={Css} alt="" />

						<h2>Page tal</h2>

						<p className={style.text}>página para fazer tal coisa</p>
					</div>
					<footer>
						<FaGithub size={40} color="#060608" />
					</footer>
				</section>

				<section className={style.sectionContainer}>

					<div className={style.contentContainer}>

						<header className={style.headerContainer}>
							<p>&bull;</p>
							<p>&bull;</p>
							<p>&bull;</p>
						</header>
						<img src={Css} alt="" />

						<h2>Page tal</h2>

						<p className={style.text}>página para fazer tal coisa</p>
					</div>
					<footer>
						<FaGithub size={40} color="#060608" />
					</footer>
				</section>


			</main>

			<Footer />
		</div>
	);
}
