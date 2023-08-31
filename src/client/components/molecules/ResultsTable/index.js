import React from "react";
import { useMediaQuery } from "react-responsive";

import {
	ResultsTableContainer,
	TableHeader,
	TableRow,
	TableData,
} from "./styles";

// Table showing exam result, changing orientation according to view width
export default function ResultsTable({ data }) {
	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<ResultsTableContainer>
			{isDesktop ? (
				<>
					<TableRow>
						{data.map((elem) => {
							return <TableHeader>{elem.header}</TableHeader>;
						})}
					</TableRow>
					<TableRow>
						{data.map((elem) => {
							return (
								<TableData className={elem.numberColor}>
									{elem.number}
								</TableData>
							);
						})}
					</TableRow>
				</>
			) : (
				data.map((elem) => {
					return (
						<TableRow>
							<TableHeader>{elem.header}</TableHeader>
							<TableData className={elem.numberColor}>{elem.number}</TableData>
						</TableRow>
					);
				})
			)}
		</ResultsTableContainer>
	);
}
