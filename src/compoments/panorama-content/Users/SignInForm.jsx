import React, { useState } from "react";
import { useSignIn } from "./useSignIn";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const CentralItems = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;
const Register = styled(NavLink)`
	color: blue;
`;

const Form = styled.form`
	width: 600px;
	color: black;
	font-family: Roboto;
	font-weight: bold;
	border-radius: 20px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background-color: aliceblue;
`;
const Input = styled.input`
	border: 1px solid var(--color-grey-300);
	border-radius: 30px solid;
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-sm);
	font-size: 17px;
	width: 35rem;
	background-color: #1d1b1b50;
	font-weight: 200;
`;

const PositionButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export default function SignInForm() {
	const getEmail = JSON.parse(localStorage.getItem("email"));
	const [email, setEmail] = useState(getEmail);
	const [password, setPassword] = useState("");

	const { isSingingIn, login } = useSignIn();

	const { register } = useForm();

	function Logining(e) {
		e.preventDefault();
		if (!email || !password) return;

		login(
			{ email, password },
			{
				onSettled: () => {
					setEmail("");
					setPassword("");
				},
			}
		);
	}

	return (
		<CentralItems>
			<Form name="" onSubmit={Logining}>
				<div>
					<Heading as="h2">Sign in</Heading>
				</div>
				<FormRow type={"sign"} label="Email">
					<Input
						id="email"
						disabled={isSingingIn}
						autoComplete="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormRow>
				<FormRow type={"sign"} label="Password">
					<Input
						value={password}
						id="password"
						disabled={isSingingIn}
						autoComplete="current-password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormRow>

				<PositionButton>
					<div>
						<div>
							If you haven't an account you could register{" "}
							<Register to={"/signup"}>here</Register>{" "}
						</div>
					</div>
					<div>
						<Button>Sign in</Button>
					</div>
				</PositionButton>
			</Form>
		</CentralItems>
	);
}
