import { ReactElement, FC } from "react";

	
interface IPlayerPreview {
	// children: JSX.Element[] | JSX.Element
	avatar: string
	userName: string,
	// player: string,
	renderData: JSX.Element[] | JSX.Element,
	children: ReactElement

}


const PlayerPreview: FC<IPlayerPreview> = ({ avatar, userName, children }): ReactElement => {
	return (
		<div>
			<div className="column">
				<img className="avatar" src={avatar} alt="avatar" />
				<h2 className="username">@{userName}</h2>
			</div>
			{children}
		</div>
	);
};

export default PlayerPreview;
