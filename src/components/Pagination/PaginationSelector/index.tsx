import React from "react";
import style from "./style.module.scss";

interface Props {
    itensPerPage: number;
    setItensPerPage: (arg0: number) => void
}

export function PaginationSelector({ itensPerPage, setItensPerPage }: Props) {

	return(
		<select className={style.selectBody} value={itensPerPage} onChange={e => setItensPerPage(Number(e.currentTarget.value))}>
			<option value={9}>9</option>
			<option value={12}>12</option>
			<option value={15}>15</option>
			<option value={21}>21</option>
		</select>

	);
}

