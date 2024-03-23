import styled from "styled-components";

import { NavLink } from "react-router-dom";

import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import DeleteProject from "./DeleteProject";
import { AddProject } from "./AddProject";
import ConfirmDuplicate from "./ConfirmDuplicate";
import EditedForm from "./EditedForm";
import { Getuser } from "../Users/Getuser";

const StyledProject = styled.div`
	display: flex;
	flex-direction: row;

	padding: 10px;
	background-color: white;
	justify-content: space-between;
	cursor: pointer;
	margin-bottom: 10px;
	width: 100%;

	border-radius: 20px;
	&:hover {
		background-color: #7c68ee73;
	}
	&:focus {
		border: 1px solid red;
	}
	&:hover {
		color: black;
	}
`;

const StyledNavLink = styled(NavLink)`
	width: 100%;
	display: flex;
	flex-direction: row;
	height: 100%;
	justify-content: space-between;
	background-color: none;
	&:hover {
		color: black;
	}

	font-weight: 700;
	line-height: 10px;
`;

const StyledColumn = styled.p`
	padding: 10px;
	background-color: none;
	width: 20%;
	text-align: center;
`;

const StyledColumnName = styled.p`
	padding: 10px;
	background-color: none;
	width: 20%;
	text-align: left;
	cursor: pointer;
	&:visited {
		border-color: #272121;
	}
`;

export default function ProjectPreviewItem({
	project,
	onCloseModal,
}) {
	const { id: projectId, num, name, numOfPhotos } = project;
	const { isCreating, createdProject } = AddProject();
	const { isDeleting, deletedProject } = DeleteProject();
	const { user } = Getuser();

	if (isCreating || isDeleting) return;

	function handleSubmit() {
		createdProject({
			name: `Copy of ${name}`,
			num,
			numOfPhotos,
			user_id: user.id,
		});
	}

	return (
		<StyledProject>
			<StyledNavLink to={`/projects/${projectId}`}>
				<StyledColumnName>{name}</StyledColumnName>
				<StyledColumn>{num}</StyledColumn>
				<StyledColumn>{numOfPhotos}</StyledColumn>
			</StyledNavLink>

			<Modal>
				<Menus.Menu>
					<Menus.Toggle id={projectId} />
					<Menus.List id={projectId}>
						<Modal.Open opens="duplicate">
							<Menus.Button>Duplicate</Menus.Button>
						</Modal.Open>

						<Modal.Open opens="f">
							<Menus.Button>Edit</Menus.Button>
						</Modal.Open>

						<Modal.Open opens="delete">
							<Menus.Button>Delete</Menus.Button>
						</Modal.Open>
					</Menus.List>

					<Modal.Window name="f">
						<EditedForm project={project} />
					</Modal.Window>

					<Modal.Window name="duplicate">
						<ConfirmDuplicate
							resourceName="project"
							project={project}
							disabled={isCreating}
							onConfirm={handleSubmit}
						></ConfirmDuplicate>
					</Modal.Window>

					<Modal.Window id={projectId} name="delete">
						<ConfirmDelete
							disabled={isDeleting}
							onConfirm={() => deletedProject(projectId)}
						/>
					</Modal.Window>
				</Menus.Menu>
			</Modal>
		</StyledProject>
	);
}
