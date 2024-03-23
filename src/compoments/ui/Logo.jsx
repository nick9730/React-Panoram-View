import styled from "styled-components";

import { NavLink } from "react-router-dom";

const StyledLogo = styled(NavLink)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 20px;
	border: 1px solid black;
	border-right: none;
	border: none;
	padding: 50px;

	height: 75px;
`;

const Img = styled.img`
	width: 80%;
	height: 70px;
`;

export default function Logo() {
	return (
		<StyledLogo to={"/profile"}>
			<Img src={"image.webp"} alt="logo"></Img>
		</StyledLogo>
	);
}
