import { SiJavascript, BsTrophy, GoClippy } from "react-icons/all";

interface IStacksInformations {
	name: string;
	icon: HTMLImageElement | JSX.Element
	projects: number;
	studyTime: string;
}


export const data: IStacksInformations[] = [
	{
		name: "JavaScript",
		icon: <SiJavascript size={80} color="yellow" style={{backgroundColor: "#000000"}} />
		projects: 16,
		studyTime: "1 ano e 6 meses"
	},
	{
		name: "Html",
		icon: <img src={Html} alt="Html Icon" />,
		projects: 9,
		studyTime: "1 ano e 6 meses"
	},
	{
		name: "Css/Sass",
		icon: <img src={Css} alt="Css icon" />,
		projects: 29,
		studyTime: "1 ano e 6 meses"
	}
]
