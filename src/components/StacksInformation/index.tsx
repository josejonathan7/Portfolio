import React, { useState } from "react";
import Html from "../../../assets/html.png";
import Css from "../../../assets/css.png";
import Typeorm from "../../../assets/typeorm.png";
import Express from "../../../assets/express.jpg";
import { SiJavascript, BsTrophy, GoClippy, SiTypescript, FaNodeJs, SiPostgresql, DiReact } from "react-icons/all";
import style from "./style.module.scss";

interface IStacksInformations {
	name: string;
	icon: HTMLImageElement | JSX.Element
	projects: number;
	studyTime: string;
}

export function StacksInformation () {
	const [stacks, setStacks] = useState<IStacksInformations[]>([
		{
			name: "TypeScript",
			icon: <SiTypescript size={80} color="#00BFFF" style={{backgroundColor: "#000000"}} />,
			projects: 22,
			studyTime: "8 meses"
		},
		{
			name: "React",
			icon: <DiReact size={80} color="#1E90FF" />,
			projects: 13,
			studyTime: "7 meses"
		},
		{
			name: "Node",
			icon: <FaNodeJs size={80} color="#008000" />,
			projects: 39,
			studyTime: "9 meses"
		},
		{
			name: "Postgresql",
			icon: <SiPostgresql size={80} color="#1E90FF" />,
			projects: 5,
			studyTime: "8 meses"
		},
		{
			name: "Typeorm",
			icon: <img src={Typeorm} alt="Typeorm icon" style={{width: "50%", transform: "rotate(\"100deg\")"}} />,
			projects: 7,
			studyTime: "4 meses"
		},
		{
			name: "Express",
			icon: <img src={Express} alt="Express icon" style={{width: "100%", transform: "rotate(\"100deg\")"}} />,
			projects: 13,
			studyTime: "9 meses"
		},
		{
			name: "Html",
			icon: <img src={Html} alt="Html Icon" />,
			projects: 9,
			studyTime: "1 ano e 6 meses"
		},
		{
			name: "JavaScript",
			icon: <SiJavascript size={80} color="#FFFF00" style={{backgroundColor: "#000000"}} />,
			projects: 16,
			studyTime: "1 ano e 6 meses"
		},
		{
			name: "Css/Sass",
			icon: <img src={Css} alt="Css icon" />,
			projects: 29,
			studyTime: "1 ano e 6 meses"
		}
	]);

	const renderStacks = (stack: IStacksInformations) => {

		return (
			<div className={style.projectContainer}>
				<div className={style.projectBody}>
					{stack.icon}
					<div className={style.projectInformationContainer}>
						<span>
							<BsTrophy size={50} color="#23BE53" style={{padding: "1rem", border: "0.1rem solid #23BE53", borderRadius: "48%"}} />
							<p>{stack.studyTime}</p>
						</span>
						<span>
							<GoClippy size={50} color="#23BE53" style={{padding: "1rem", border: "0.1rem solid #23BE53", borderRadius: "48%"}}  />
							<p>{stack.projects} projetos</p>
						</span>
					</div>
				</div>
				<footer className={style.projectFooter}></footer>
			</div>
		);
	};

	return (
		<section className={style.sectionContainer}>
			{ stacks.map(stack => renderStacks(stack)) }
		</section>
	);
}
