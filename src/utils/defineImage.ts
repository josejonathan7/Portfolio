


export default function defineImage(name: string): string {
	let imageName: string;

	switch (name) {
	//letra C
	case "conversao-temperatura":
		imageName = "converterTemperatura.png";
		break;

	case "correio-elegante":
		imageName = "correioElegante.png";
		break;

	case "Calculando-Regra-3":
		imageName = "calcRegra3.png";
		break;

	case "Calculadora":
		imageName = "calculadora.png";
		break;

	//letra D
	case "Dev-Finances-Rocketseat":
		imageName = "devFinance.png";
		break;

	case "DashboardPage":
		imageName = "dashboardPage.png";
		break;


	//letra E
	case "Eduzz-bootcamp-desafio-jogo-genius":
		imageName = "jogoGenius.png";
		break;

	//letra F
	case "Fone-Landing-Page-Front":
		imageName = "foneProject.png";
		break;

	//letra G
	case "GitHub-Api":
		imageName = "gitHubApi.png";
		break;

	case "Github-Api-Mobile-ReactNative":
		imageName = "githubApiMobile.png";
		break;

	//letra H
	case "Hackaton-Etec-Front-Mobile":
		imageName = "hackaton.png";
		break;



	//letra J
	case "Jobs-Calc-Rocketseat":
		imageName = "jobsCalc.png";
		break;

	//letra L
	case "Lista-de-times":
		imageName = "listaTimes.png";
		break;

	//letra N
	case "Naruto-Frases-DIO":
		imageName = "narutoFrases.png";
		break;

	case "NLW-Heat-Impulse-React":
		imageName = "nlwHeatReact.png";
		break;

	case "NLW-Heat-Impulse-ReactNative":
		imageName = "nlwHeatReactNative.png";
		break;

	//letra M
	case "music-library":
		imageName = "playlistProject.png";
		break;

	//letra P
	case "Pagina-nav-carousel-card":
		imageName = "pagNavCarousel.png";
		break;

	case "PaymentPage":
		imageName = "paymentPage.png";
		break;

	case "PrimeiroProjetoComEJS":
		imageName = "primeiroEjs.png";
		break;

	case "Portfolio":
		imageName = "portfolio.png";
		break;

	case "ProjetoTCC-FrontEnd":
		imageName = "AniJogos.png";
		break;

	//letra S
	case "Santander_Bootcamp_DIO_Frontend":
		imageName = "santanderBootcamp.png";
		break;

	default:
		imageName = "notFound";
		break;
	}

	return imageName;
}
