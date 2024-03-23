import { useEffect } from "react";
import { Getuser } from "../panorama-content/Users/Getuser";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import Button from "./Button";

const CentralItems = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

function RedicredRouter({ children }) {
	const navigate = useNavigate();
	const { isAuthenticated, isLoading } = Getuser();

	useEffect(
		function () {
			if (!isAuthenticated && !isLoading)
				return navigate("/login");
		},
		[isAuthenticated, isLoading, navigate]
	);

	if (isLoading) return <CentralItems></CentralItems>;

	if (isAuthenticated) return children;
}

export default RedicredRouter;
