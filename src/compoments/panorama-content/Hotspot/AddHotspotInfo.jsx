import React from "react";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { useAddHotspot } from "./useAddHotspot";

import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const Inputinvisible = styled.input`
	visibility: none;
	opacity: 0;
`;
const PositionButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export default function AddHotspotInfo({ onCloseModal }) {
	const { register, handleSubmit } = useForm({
		defaultValues: { type: "info" },
	});
	const { id: paramsId } = useParams();
	const { AddHotspot } = useAddHotspot();

	function onSubmiten(data) {
		console.log(data);

		AddHotspot(
			{ ...data },
			{ onSuccess: () => onCloseModal?.() }
		);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmiten)}>
			<FormRow>
				<Heading as="h3">Add Hotspot Info</Heading>
			</FormRow>
			<FormRow label="Name">
				<Input
					type="text"
					id="name"
					{...register("name", {
						required: "This field is required",
					})}
				/>
			</FormRow>
			<FormRow label="pitch">
				<Input
					type="number"
					id="name"
					{...register("pitch", {
						required: "This field is required",
					})}
				/>
			</FormRow>
			<FormRow label="Yaw">
				<Input
					type="number"
					id="name"
					{...register("yaw", {
						required: "This field is required",
					})}
				/>
			</FormRow>
			<FormRow label="Info or Custom">
				<Input
					disabled
					type="text"
					id="type"
					{...register("type", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<Inputinvisible
				value={paramsId}
				placeholder="Give a number of photos in project"
				{...register("image_id", {
					required: "This field is required",
				})}
			/>

			<PositionButton>
				<Button>Add</Button>
				<Button onClick={onCloseModal}>Cancel</Button>
			</PositionButton>
		</Form>
	);
}
