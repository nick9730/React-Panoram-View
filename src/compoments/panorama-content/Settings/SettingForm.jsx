import React from "react";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";

import { useUpdateSettings } from "./useUpdateSettings";
import { Getuser } from "../Users/Getuser";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../../ui/Button";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 90rem;

	border-radius: 20px;
	padding: 100px;
	background-color: white;
`;

const CheckBox = styled.input`
	width: 20px;
	height: 20px;
	margin-right: 140px;
	border-radius: 20px;
`;

const Inputinvisible = styled.input`
	visibility: none;
	opacity: 0;
`;
const PositionButton = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-end;
`;

export default function SettingForm({ settings }) {
	const { UpdateSettings, isLoading: isUpdating } =
		useUpdateSettings();
	const { user } = Getuser();
	const { id: userID } = user;

	const { register, formState, handleSubmit } = useForm({
		defaultValues: {
			pitch: settings?.at(0) ? settings.at(0)?.pitch : 140,
			yaw: settings?.at(0) ? settings.at(0)?.yaw : 140,
			autoload: settings?.at(0)
				? settings.at(0)?.autoload
				: true,
			autoRotate: settings?.at(0)
				? settings.at(0)?.autoRotate
				: 1,
		},
	});

	const { errors } = formState;

	function SubmitSetting(data) {
		UpdateSettings({
			id: userID,
			newSetting: { ...data },
		});
	}

	return (
		<Form
			type="regular"
			onSubmit={handleSubmit(SubmitSetting)}
		>
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					paddingBottom: "60px",
					width: "100%",
				}}
			>
				<Heading as="h1">Update your Settings</Heading>
			</div>
			<FormRow label="Pitch" error={errors?.pitch?.message}>
				<Input
					type="number"
					id="pitch"
					{...register("pitch", {
						min: {
							value: 1,
							message: "The Pitch should be greater than 1",
						},
						max: {
							value: 150,
							message: "The Pitch should be smaller than 150",
						},
					})}
				/>
			</FormRow>
			<FormRow label="Yaw" error={errors?.yaw?.message}>
				<Input
					type="number"
					id="Yaw"
					{...register("yaw", {
						required: "The field is required",
						min: {
							value: 1,
							message: "The Yaw should be greater than 1",
						},
						max: {
							value: 150,
							message: "The Yaw should be smaller than 150",
						},
					})}
				/>
			</FormRow>
			<FormRow
				type={"settings"}
				label="Autorotate"
				error={errors?.autoRotate?.message}
			>
				<Input
					name="autoRotate"
					id="autoRotate"
					type="number"
					{...register("autoRotate", {
						required: "The field is required",
						min: {
							value: 0,
							message:
								"The autoRotation in 0 means that you will not have autoRotation to your panorama",
						},
						max: {
							value: 10,
							message:
								"The autoRotation should be smaller than 10",
						},
					})}
				/>
			</FormRow>

			<FormRow type={"autoload"} label="Autoload">
				<CheckBox
					type="checkbox"
					id="autoload"
					{...register("autoload")}
				/>
			</FormRow>
			<Inputinvisible
				value={userID}
				{...register("user_id")}
			/>
			<PositionButton>
				<Button>Confirm</Button>
			</PositionButton>
		</Form>
	);
}
