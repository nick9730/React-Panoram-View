import styled from "styled-components";

import { NavLink } from "react-router-dom";
import {
	IoAlbums,
	IoPerson,
	IoSettings,
} from "react-icons/io5";
import { useInsertSetting } from "../panorama-content/Settings/useInsertSettings";
import { useGetSetting } from "../panorama-content/Settings/useGetSettings";
import { Getuser } from "../panorama-content/Users/Getuser";

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
`;
const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		color: wheat;
		margin-top: 60px;
		font-size: 20px;
		font-family: "Roboto";
		width: 100%;
		padding: 10px;
	}

	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: black;
		background-color: wheat;
		border-left: 2px solid hsl(0, 0%, 55%);
		border: 1px solid black;
		border-right: none;
	}

	& svg {
		width: 2.4rem;
		height: 2.4rem;
		color: #04fdff;
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: black;
	}
`;

const Span = styled.span`
	padding: 4px;
	line-height: 2px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const SpanOne = styled.span`
	padding-left: 20px;
`;
export default function NavBar() {
	const { InsertSetting } = useInsertSetting();
	const { settings } = useGetSetting();
	const { user } = Getuser();
	const { id } = user;

	const user_id = settings?.at(0)?.user_id;

	function handleInsertSettings(e) {
		if (user_id === id) return;

		const SettingItem = {
			pitch: 140,
			yaw: 140,
			autoload: true,
			autoRotate: 1,
			user_id: id,
		};

		InsertSetting({
			newSetting: {
				...SettingItem,
			},
		});
	}

	return (
		<nav>
			<NavList>
				<li>
					<StyledNavLink to="/profile">
						<Span>
							<IoPerson />
							<SpanOne>Profile</SpanOne>
						</Span>
					</StyledNavLink>
				</li>

				<li>
					<StyledNavLink to="/projects">
						<Span>
							<IoAlbums />

							<SpanOne>Project</SpanOne>
						</Span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink
						onClick={handleInsertSettings}
						to="/settings"
					>
						{" "}
						<Span>
							<IoSettings />
							<SpanOne>Settings</SpanOne>
						</Span>
					</StyledNavLink>
				</li>
			</NavList>
		</nav>
	);
}
