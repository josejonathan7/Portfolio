import React from "react";
import { BsTwitter, FaLinkedinIn, TiSocialInstagram, BiBasketball } from "react-icons/all";
import style from "./style.module.scss";

export function Footer () {

	return (
		<footer className={style.footerContainer}>
			<button>
				<BsTwitter size={40} color="#FFFFFF" />
			</button>
			<button>
				<FaLinkedinIn size={40} color="#FFFFFF" />
			</button>
			<button>
				<BiBasketball size={40} color="#FFFFFF" />
			</button>
			<button>
				<TiSocialInstagram size={40} color="#FFFFFF" />
			</button>
		</footer>
	);
}
