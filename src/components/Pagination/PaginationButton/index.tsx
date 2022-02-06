import React from "react";
import style from "./style.module.scss";

interface Props {
    pages: number;
    setCurrentPage: (arg0: number) => void
}

export function PaginationButton({ pages, setCurrentPage }: Props){
	return (

		<div className={style.paginationButtonUl}>
			<>
				{Array.from(Array(pages), (item, index) => {
					return <button key={`buttonPagination-${index}`} value={index} onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}>{index + 1}</button>;
				})}
			</>
		</div>

	);
}
