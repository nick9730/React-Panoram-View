import { useEffect } from "react";
import { Getuser } from "../panorama-content/Users/Getuser";

import Spinner from "../../../../worldwise/src/compomens/Spinner";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import Button from "./Button";

const CentralItems = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export default function InsideRoute({ children }) {
	const navigate = useNavigate();
	const { isAuthenticated, isLoading } = Getuser();

	//    useEffect(function(){
	//     if(!isAuthenticated && isLoading){navigate("/login", { replace: true })};
	//    },[isAuthenticated,isLoading,navigate])

	if (isLoading)
		return (
			<CentralItems>
				<Spinner />
			</CentralItems>
		);

	if (isAuthenticated) return children;

	return {};
}
