import { NavLink, Outlet } from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle", "Settings"];

const Navigate = () => {
	return (
		<div className="container">
			<ul className="nav">
				{navLinks.map((navLink, index) => (
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
