import styled, { css } from "styled-components";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

import Heading from "../../ui/Heading";

import { EditProject } from "./EditeProject";

const Form = styled.form`
	${(props) =>
		props.type === "regular" &&
		css`
			padding: 2.4rem 4rem;

			/* Box */
			background-color: var(--color-grey-0);
			border: 1px solid var(--color-grey-100);
			border-radius: var(--border-radius-md);
		`}

	${(props) =>
		props.type === "modal" &&
		css`
			width: 100rem;
			height: 30rem;
		`}
    
  overflow: hidden;
	font-size: 1.4rem;
`;
Form.defaultProps = {
	type: "regular",
};

export default function EditedForm({
	project,
	onCloseModal,
}) {
	const { id: projectId } = project;
	const { handleSubmit, formState, register } = useForm({
		defaultValues: project,
	});
	const { errors } = formState;
	const { isEditing, editedProject } = EditProject();

	function onEdit(data) {
		editedProject({ newProject: { ...data }, id: projectId });
		onCloseModal();
	}

	if (isEditing) return "d";

	return (
		<Form type="regular" onSubmit={handleSubmit(onEdit)}>
			<FormRow>
				<div
					style={{
						display: "flex",
						alignItems: "flex-start",
						paddingBottom: "60px",
						width: "100%",
						marginLeft: "-360px",
					}}
				>
					<Heading as="h2">Editing Form</Heading>
				</div>
			</FormRow>
			<FormRow label="Name" error={errors?.name?.message}>
				<Input
					disabled={isEditing}
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
					disabled={isEditing}
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
					disabled={isEditing}
					placeholder="Give a number of photos in project"
					{...register("numOfPhotos", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow>
				<Button type="primary" onClick={handleSubmit(onEdit)}>
					Edit
				</Button>
				<Button onClick={onCloseModal}>Cancel</Button>
			</FormRow>
		</Form>
	);
}
