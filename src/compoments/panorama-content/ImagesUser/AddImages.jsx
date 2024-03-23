import React from "react";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateImage } from "./useUpdateImage";
import Button from "../../ui/Button";
import { useParams } from "react-router-dom";
import { Getuser } from "../Users/Getuser";
import PacmanLoader from "react-spinners/PacmanLoader";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const InputIvisible = styled.input`
	border: 1px solid var(--color-grey-300);
	border-radius: 50px solid;
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-sm);
	padding: 0.8rem 1.2rem;
	width: 40rem;
	visibility: invisible;
	opacity: 0;
	cursor: pointer;
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

const BackgroundImages = styled.div`
	z-index: 999;
	position: absolute;
	top: 0px;
	left: 0px;
	background-color: #ffffffed;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
`;

const TextArea = styled.textarea`
	border: 1px solid var(--color-grey-300);
	border-radius: 50px solid;
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-sm);
	padding: 0.8rem 1.2rem;
	width: 40rem;
	height: 10rem;
`;

export default function AddImages() {
	const { id: ParamsID } = useParams();
	const { user } = Getuser();
	const { id: userId } = user;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			user_id: userId,
			project_id: ParamsID,
		},
	});
	const { isCreating, UpdatedImages } = useUpdateImage();

	function onSubmit(data) {
		console.log(data);
		UpdatedImages({ ...data, image: data.image[0] });
	}
 
	  if (isCreating) return <PacmanLoader/>

	return (
		<Form type="modal" onSubmit={handleSubmit(onSubmit)}>
			{isCreating ? (
				<BackgroundImages>
					<PacmanLoader />
				</BackgroundImages>
			) : (
				<>
					<FormRow
						type={"uploadimage"}
						style={{
							display: "flex",
							alignItems: "center",
							paddingBottom: "60px",
							marginRight: "150px",
						}}
					>
						<Heading as="h1">Upload photos</Heading>
					</FormRow>
					<FormRow type={"uploadimage"} label="Name  ">
						<Input
							id="name"
							placeholder="Put the name of panorama photo"
							type="text"
							{...register("name", {
								required: "This field is required",
							})}
						/>
					</FormRow>

					<FormRow
						type={"uploadimage"}
						label="Insert your photo "
					>
						<FileInput
							id="image"
							accept="image/*"
							type="file"
							{...register("image", {
								required: "The field is required",
							})}
						/>
					</FormRow>

					<FormRow type={"uploadimage"} label="Information  ">
						<TextArea
							id="infos"
							placeholder="Write some information for the room"
							type="text"
							{...register("infos", {
								required: "This field is required",
							})}
						/>
					</FormRow>

					<InputIvisible
						type="id"
						value={userId}
						{...register("user_id")}
					/>
					<InputIvisible
						type="id"
						value={ParamsID}
						{...register("project_id")}
					/>
					<div
						style={{
							display: "flex",
							alignItems: "flex-end",
							width: "100%",
							justifyContent: "flex-end",
						}}
					>
						<Button>Add</Button>
					</div>
				</>
			)}
		</Form>
	);
}
