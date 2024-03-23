import React, { useState } from "react";

import styled from "styled-components";

import { useLocation } from "react-router-dom";
import CopiedLink from "./CopiedLink";

import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import Button from "../../ui/Button";
import AddHotspotInfo from "./AddHotspotInfo";
import AddHotSpotModal from "./AddHotSpotModal";
import AddHotspotTour from "./AddHotspotTour";

const StyledButton = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Div = styled.div`
	width: 1500px;
	height: vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export default function OpetationButtonsHotspot({
	onCloseModal,
}) {
	const [show, setShow] = useState(false);
	const [url, setUrl] = useState();

	const location = useLocation();

	function TakeUrl() {
		setShow(!show);
		setUrl(location);
	}

	return (
		<StyledButton>
			<Button onClick={TakeUrl}>Share Link</Button>

			{show && <CopiedLink url={url} />}

			<Modal>
				<Menus.Menu>
					<Modal.Open opens="add">
						<Button>Add Info Button</Button>
					</Modal.Open>

					<Modal.Window name="add">
						<AddHotspotInfo />
					</Modal.Window>
				</Menus.Menu>
			</Modal>

			<Modal>
				<Menus.Menu>
					<Modal.Open opens="addTour">
						<Button> Add Tour Button</Button>
					</Modal.Open>

					<Modal.Window name="addTour">
						<Div>
							<AddHotSpotModal onCloseModal={onCloseModal} />
							<AddHotspotTour onCloseModal={onCloseModal} />
						</Div>
					</Modal.Window>
				</Menus.Menu>
			</Modal>
		</StyledButton>
	);
}
