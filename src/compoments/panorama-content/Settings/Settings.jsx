import React from "react";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useGetSetting } from "./useGetSettings";
import { useUpdateSettings } from "./useUpdateSettings";
import { Getuser } from "../Users/Getuser";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../../ui/Button";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledClip = styled.div`
	display: flex;
	flex-direction: row-reverse;
	width: 100%;
	height: 50vh;
	justify-content: center;
	align-items: center;
`;

const BodySettings = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

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
const Select = styled.select`
	width: 40rem;
	justify-content: center;
	align-items: center;
	border: 1px solid;
	padding: 7px;
	margin: 1rem;
	border-radius: 10px;
`;
const Option = styled.option`
	text-align: center;
	border-radius: 20px;
	border: 1px solid black;
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

const Span = styled.div`
	width: 200px;
	height: 100px;

	color: blue;
`;

export default function Settings() {
	const { settings, isLoading } = useGetSetting();
	const { UpdateSettings, isLoading: isUpdating } =
		useUpdateSettings();
	const { user } = Getuser();
	const { id: userID } = user;

	console.log(settings);
	const { register, formState, handleSubmit } = useForm({
		defaultValues:
			settings && settings !== undefined && settings !== null
				? settings[0]
				: 0,
	});

	const { errors } = formState;

	function SubmitSetting(data) {
		console.log(data);
		UpdateSettings({
			id: settings[0].id,
			newSetting: { ...data },
		});
	}

	console.log(settings && settings[0]?.autoload);

	return (
		<>
			{isLoading ? (
				<StyledClip>
					<ClipLoader
						size={80}
						color="rgba(54, 215, 183, 1)"
						margin={260}
					/>
				</StyledClip>
			) : (
				<BodySettings>
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
						<FormRow
							label="Pitch"
							error={errors?.pitch?.message}
						>
							<Input
								type="number"
								defaultValue={settings[0]?.pitch}
								id="pitch"
								{...register("pitch", {
									min: {
										value: 1,
										message:
											"The Pitch should be greater than 1",
									},
									max: {
										value: 150,
										message:
											"The Pitch should be smaller than 150",
									},
								})}
							/>
						</FormRow>
						<FormRow label="Yaw" error={errors?.yaw?.message}>
							<Input
								type="number"
								defaultValue={settings[0]?.yaw}
								id="Yaw"
								{...register("yaw", {
									required: "The field is required",
									min: {
										value: 1,
										message:
											"The Yaw should be greater than 1",
									},
									max: {
										value: 150,
										message:
											"The Yaw should be smaller than 150",
									},
								})}
							/>
						</FormRow>
						<FormRow
							type={"settings"}
							label="Autorotate"
							error={errors?.autoRotate?.message}
						>
							<Select
								name="autoRotate"
								defaultValue={settings[0]?.autoRotate}
								id="autoRotate"
								type="number"
								{...register("autoRotate", {
									required: "The field is required",
									min: {
										value: 0,
										message:
											"The autoRotation in 0 means that you dont have autoRotation in your panorama",
									},
								})}
							>
								{Array.from({ length: 11 }).map(
									(element, index) => (
										<Option key={index} value={Number(index)}>
											<Span>{Number(index)}</Span>
										</Option>
									)
								)}
							</Select>
						</FormRow>

						<FormRow type={"settings"} label={"Languages"}>
							<Select
								name="language"
								id="language"
								defaultValue={settings[0]?.language}
								{...register("language")}
							>
								<Option>
									<Span>English</Span>
								</Option>
								<Option>Greek</Option>
							</Select>
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
				</BodySettings>
			)}
		</>
	);
}
// image={imagePanorama}
// autoLoad={true}
// width="70%"
// height="500px"
// autoRotate={1}
// vOffset={10}
// pitch={10}
// yaw={180}>
