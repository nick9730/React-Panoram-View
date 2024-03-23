import React, { useState } from "react";
import { useSignUp } from "./useSignUp";

import styled, { css } from "styled-components";

import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useProjects } from "../../context/ContextProjext";
import Heading from "../../ui/Heading";
import FormRow from "../../ui/FormRow";

const CentralItems = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const Form = styled.form`
	width: 600px;
	color: black;
	font-family: "Roboto";
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
	width: 100%;
	display: flex;
	align-items: flex-end;

	justify-content: flex-end;
`;

export default function SignUpForm() {
	const [email_login, setEmailLogin] = useState();
	const [password_login, setPasswordLogin] = useState();

	const { register, handleSubmit, formState, reset } =
		useForm();

	const { isSingingUp, SignedUp } = useSignUp();

	const { errors } = formState;

	function signUp({ fullname, email, password }) {
		SignedUp({ fullname, email, password });

		localStorage.setItem("email", JSON.stringify(email));
	}

	return (
		<CentralItems>
			<Form name="" onSubmit={handleSubmit(signUp)}>
				<div>
					<Heading as="h2">Sign up</Heading>
				</div>
				<FormRow type={"sign"} label="Full Name">
					<Input
						id="fullname"
						type="text"
						disabled={isSingingUp}
						placeholder="Type your Full Name"
						{...register("fullname", {
							required: "The email is required",
						})}
					/>
				</FormRow>
				<FormRow
					type={"sign"}
					label="Email"
					error={errors?.email?.message}
				>
					<Input
						onChange={(e) => setEmailLogin(e.target.value)}
						id="email"
						type="email"
						disabled={isSingingUp}
						placeholder="Type your Email"
						{...register("email", {
							required: "The email is required",
						})}
					/>
				</FormRow>
				<FormRow
					type={"sign"}
					label="Password"
					error={errors?.password?.message}
				>
					<Input
						onChange={(e) => setEmailLogin(e.target.value)}
						id="password"
						disabled={isSingingUp}
						placeholder="Type your Password"
						type="password"
						{...register("password", {
							required: "The password is requied",
						})}
					/>
				</FormRow>
				<PositionButton>
					<Button>Sign Up</Button>
				</PositionButton>
			</Form>
		</CentralItems>
	);
}
