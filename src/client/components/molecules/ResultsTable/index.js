import React from "react";

import {
	ResultsTableContainer,
	TableHeader,
	TableRow,
	TableData,
} from "./styles";
import { useMediaQuery } from "react-responsive";

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
