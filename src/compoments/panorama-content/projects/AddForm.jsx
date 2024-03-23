import React from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import { AddProject } from "./AddProject";
import { Getuser } from "../Users/Getuser";
import styled from "styled-components";

const Inputinvisible = styled.input`
	visibility: none;
	opacity: 0;
`;

export default function AddForm({ onCloseModal }) {


	const { createdProject, isCreating } = AddProject();
	const { handleSubmit, formState, register, reset } =
		useForm();
	const { errors } = formState;

	function onSubmite(data) {
		createdProject(
			{ ...data },
			{
				onSuccess: ({data}) => {
					reset();
					onCloseModal?.();
				},
			}
		);
	}

	const { user } = Getuser();
	const { id } = user;

	console.log(isCreating);

	return (
		<Form type="modal" onSubmit={handleSubmit(onSubmite)}>
			<FormRow>
				<Heading as="h2">Adding Form</Heading>
			</FormRow>
			<FormRow label="Name" error={errors?.name?.message}>
				<Input
					disabled={isCreating}
					placeholder="Give one name in project"
					{...register("name", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow
				label="Number of photos"
				error={errors?.name?.message}
			>
				<Input
					disabled={isCreating}
					placeholder="Give a number of photos in project"
					{...register("num", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow
				label="Number of rooms"
				error={errors?.name?.message}
			>
				<Input
					disabled={isCreating}
					placeholder="Give a number of photos in project"
					{...register("numOfPhotos", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<Inputinvisible
				disabled={isCreating}
				value={id}
				placeholder="Give a number of photos in project"
				{...register("user_id", {
					required: "This field is required",
				})}
			/>

			<FormRow>
				<Button
					type="primary"
					onClick={handleSubmit(onSubmite)}
				>
					Add
				</Button>
				<Button onClick={onCloseModal}>Cancel</Button>
			</FormRow>
		</Form>
	);
}
