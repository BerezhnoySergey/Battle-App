import { ReactElement, FC } from "react";

interface IPlayerPreview {
	avatar: string
	userName: string,
	profile: string,
	children: any
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
