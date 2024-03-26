import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../ui/Button";
import { UseModal } from "./ModalContext";
import { useOutsideClick } from "../../hooks/useOutsideCalling";
import { useDeleteHotspot } from "../Hotspot/useDeleteHotspot";
import EditedFormHotspot from "../Hotspot/EditedFormHotspot";
import GetImagesForModalHotspot from "../Hotspot/GetImagesForModalHotspot";
import { useProjects } from "../../context/ContextProjext";
import { useAddTour } from "../Hotspot/useAddTour";
import { Link, NavLink, useParams } from "react-router-dom";
import { useGetTour } from "../Hotspot/useGetTour";
import toast from "react-hot-toast";

const ArticleOpen = styled.article`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
	z-index: 1200;
	justify-content: flex-end;
	align-items: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: none;
`;

const StyledNavlink = styled(NavLink)``;

const FirstModal = styled.div`
	${(props) =>
		props.type === "regular" &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background-color: white;
			width: 200px;
			height: 350px;
			position: absolute;
			gap: 10px;
			border-radius: 10px;
		`}

	${(props) =>
		props.type === "invisble" &&
		css`
			visibility: invisible;
			opacity: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background-color: white;
			width: 200px;
			height: 200px;
			position: absolute;
			gap: 10px;
			border-radius: 10px;
		`}
`;
FirstModal.defaultProps = {
	type: "regular",
};

const ButtonClose = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	height: 40px;
	width: 40px;
	padding: 1.5em;
	padding-top: 1.1rem;
	border: none;
	border-radius: 30%;
	color: black;

	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Close = styled.span`
	font-size: 30px;
	background-color: none;
`;

export default function ModalContainer() {
	const {
		mouseCoordinates,
		close,
		hotspotID,
		ModalIsOpened,
		setModalIsOpened,
		ImagesModalisOpen,
		setImagesModalisOpen,
		setIsOpen,
	} = UseModal();

	const coords = ModalIsOpened ? mouseCoordinates : "";

	const [isEditing, setIsediting] = useState(true);
	const [showform, setShowForm] = useState(false);

	const [isTouring, setTouring] = useState(true);
	const [showImage, setImages] = useState(false);

	const { id } = useParams();

	const { data } = useGetTour();
	const { AddTour } = useAddTour();
	const { deletedHotspot, isDeleting } = useDeleteHotspot();
	const ref = useOutsideClick(close);

	const getItem = Number(
		JSON.parse(localStorage.getItem("project_id"))
	);

	function handleDeleteButton() {
		deletedHotspot(hotspotID);
		close();
	}

	function handleDeleteTour() {
		if (!id) return;
		const Item = {
			addTour: true,
		};

		AddTour(
			{
				id: id,
				newTour: { ...Item },
			},
			{
				onSuccess: () => {
					close?.();
					toast.success("Tour has succefully deleted");
				},
			}
		);
	}

	function handleEdit() {
		setIsediting(false);
		setShowForm(true);
	}

	if (!data) return;

	return (
		<ArticleOpen>
			<FirstModal
				type={
					isEditing || isTouring ? "regular" : "invisible"
				}
				onClick={() => {
					setModalIsOpened(false);
				}}
				ref={isEditing || isTouring ? ref : null}
				style={
					ModalIsOpened
						? {
								top: `${mouseCoordinates.y + 40}px`,
								left: `${mouseCoordinates.x - 90}px`,
							}
						: {
								top: `${coords.y + 40}px`,
								left: `${coords.x - 90}px`,
							}
				}
			>
				<ButtonClose onClick={close}>
					<Close>&times;</Close>
				</ButtonClose>

				<Button onClick={handleDeleteButton}>Delete</Button>

				<Button onClick={handleEdit}>Edit</Button>

				{data[0]?.addTour ? (
					<Button
						onClick={() => {
							setImagesModalisOpen(true);
							setTouring(false);
						}}
					>
						Add Tour
					</Button>
				) : (
					<>
						<StyledNavlink
							onClick={() => setIsOpen(false)}
							to={`/projects/${getItem}/gallery/${data[0]?.tour}`}
						>
							<Button>Go to next Room</Button>
						</StyledNavlink>

						<Button onClick={handleDeleteTour}>
							Delete your Choice
						</Button>
					</>
				)}
				{showform && <EditedFormHotspot />}
				{ImagesModalisOpen && <GetImagesForModalHotspot />}
			</FirstModal>
		</ArticleOpen>
	);
}
