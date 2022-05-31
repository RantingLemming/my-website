import React from "react";

export interface ISVGProps {
	paths: IPath[];
	viewBox?: string;
	classNames?: string;
	styles?: React.CSSProperties;
}

export interface IPath {
	d: string;
	fill?: string;
	stroke?: string;
	strokeWidth?: string;
}
export const SVG = ({ paths, viewBox, classNames, styles }: ISVGProps) => {
	return (
		<svg viewBox={viewBox} className={classNames} style={styles}>
			{paths.map((path) => (
				<path {...path}></path>
			))}
		</svg>
	);
};
