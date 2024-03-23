import { useState } from "react";

import Button from "../../ui/Button";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";

import { useUpdateUser } from "./UpdateUser";

import styled from "styled-components";
import { Getuser } from "./Getuser";

const Formdd = styled.form`
	display: flex;
	flex-direction: row;

	height: 50vh;
	width: 100%;
	padding: 10rem;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const BodyProfile = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const FileInput = styled.input.attrs({ type: "file" })`
	font-size: 1.4rem;
	border-radius: var(--border-radius-sm);

	&::file-selector-button {
		font: inherit;
		font-weight: 500;
		padding: 0.8rem 1.2rem;
		margin-right: 1.2rem;
		border-radius: var(--border-radius-sm);
		border: none;
		color: var(--color-brand-50);
		background-color: #007781;
		cursor: pointer;
		transition:
			color 0.2s,
			background-color 0.2s;

		&:hover {
			background-color: var(--color-brand-700);
		}
	}
`;
function UpdateUserDataForm() {
	const { user } = Getuser();
	const { updateUser1, isUpdating } = useUpdateUser();
	const {
		email,
		user_metadata: { fullname: currentFullName },
	} = user;
	// const { updateUser1, isUpdating } = useUpdateUser();
	const [avatar, setAvatar] = useState(null);
	const [fullname, setFullName] = useState(currentFullName);

	if (!user) return;

	function handleSubmit(e) {
		e.preventDefault();
		console.log(user);
		if (!fullname) return;
		updateUser1(
			{ fullname, avatar },
			{
				onSuccess: () => {
					setAvatar(null);
					e.target.reset();
				},
			}
		);
	}

	function handleCancel() {
		setFullName(currentFullName);
		setAvatar(null);
	}

	return (
		<BodyProfile>
			<Form type="regular" onSubmit={handleSubmit}>
				<div
					style={{
						display: "flex",
						alignItems: "flex-start",
						paddingBottom: "60px",
						width: "100%",
						marginLeft: "-360px",
					}}
				>
					<Heading as="h1">Update your Information</Heading>
				</div>

				<FormRow type="uploadinfo" label="Email address">
					<Input value={email} disabled />
				</FormRow>

				<FormRow type="uploadinfo" label="Full name">
					<Input
						type="text"
						value={fullname}
						onChange={(e) => setFullName(e.target.value)}
						id="fullName"
						// disabled={isUpdating}
					/>
				</FormRow>

				<FormRow type="uploadinfo" label="Avatar image">
					<FileInput
						id="avatar"
						accept="image/*"
						onChange={(e) => setAvatar(e.target.files[0])}
						// disabled={isUpdating}
					/>
				</FormRow>

				<FormRow>
					<Button>Update account</Button>
				</FormRow>
			</Form>
		</BodyProfile>
	);
}

export default UpdateUserDataForm;
