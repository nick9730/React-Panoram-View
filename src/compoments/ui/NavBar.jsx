import styled from "styled-components";

import { NavLink } from "react-router-dom";
import {
	IoAlbums,
	IoCamera,
	IoPerson,
	IoSettings,
} from "react-icons/io5";
import { RiProjector2Fill } from "react-icons/ri";
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

	/* This works because react-router places the active class on the active NavLink */
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
	return (
		<nav>
			<NavList>
				{/* <li><StyledNavLink to="/dashboard"><span>Dashboard</span></StyledNavLink></li> */}
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
					<StyledNavLink to="/settings">
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
