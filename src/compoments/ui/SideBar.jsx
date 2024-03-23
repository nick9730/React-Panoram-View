import styled from "styled-components";

import NavBar from "./NavBar";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
	background-color: hsl(244, 13%, 21%);
	grid-row: 1/-1;
	display: flex;
	flex-direction: column;
	color: black;
	width: 200px;
	border-radius: 20px;
	margin: 10px;
`;

export default function Aside() {
	return (
		<StyledSidebar>
			<Logo />
			<NavBar />
		</StyledSidebar>
	);
}
