import { NavLink, Outlet } from "react-router-dom";
import {FC, ReactElement} from 'react'

const navLinks: string[] = ["Home", "Popular", "Battle", "Settings"];

const Navigate: FC = (): ReactElement => {
	return (
		<div className="container">
			<ul className="nav">
				{navLinks.map((navLink: string, index: number): ReactElement => (
					<li key={index}>
						<NavLink to={navLink !== "Home" ? navLink.toLowerCase() : "/"}>
							{navLink}
						</NavLink>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
};

export default Navigate;
