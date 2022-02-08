


export default function defineImage(name: string): string {
	let imageName: string;

	console.log(name);

	switch (name) {
	case "Lista-de-times":
		imageName = "listaTimes.png";
		break;

	case "Fone-Landing-Page-Front":
		imageName = "foneProject.png";
		break;

	case "music-library":
		imageName = "playlistProject.png";
		break;

	case "ProjetoTCC-FrontEnd":
		imageName = "Anijogos.png";
		break;

	case "conversao-temperatura":
		imageName = "converterTenperatura.png";
		break;

	case "correio-elegante":
		imageName = "correioElegante.png";
		break;

	case "Github-Api-Mobile-ReactNative":
		imageName = "githubApiMobile.png";
		break;

	case "Jobs-Calc-Rocketseat":
		imageName = "jobsCalc.png";
		break;

	case "Naruto-Frases-DIO":
		imageName = "narutoFrases.png";
		break;

	case "NLW-Heat-Impulse-React":
		imageName = "nlwHeatReact.png";
		break;

	case "NLW-Heat-Impulse-ReactNative":
		imageName = "nlwHeatReactNative.png";
		break;

	case "PrimeiroProjetoComEJS":
		imageName = "primeiroEjs.png";
		break;

	default:
		imageName = "notFound";
		break;
	}

	return imageName;
}
