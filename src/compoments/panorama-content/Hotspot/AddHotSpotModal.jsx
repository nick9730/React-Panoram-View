import React, { useState } from "react";

import ReactPannellum, {
	getConfig,
	mouseEventToCoords,
	getViewer,
} from "react-pannellum";

import { useGetOneImage } from "../ImagesUser/useGetOneImage";
import Button from "../../ui/Button";
import { UseModal } from "../ModalContext/ModalContext";
import styled from 'styled-components'

	
	
const Content = styled.div`
	width: 900px;
	height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
    `;

export default function AddHotSpotModal({ onCloseModal }) {
	const { image } = useGetOneImage();
	const imagePanorama = image ? image[0]?.image : "";
	const { setPitch, setYaw} = UseModal();

	const config = {
		autoRotate: 0,
		autoLoad: true,
		showZoomCtrl: false,
		showFullscreenCtrl: false,
		vOffset: 10,
		hfov: 110,
		hotSpotDebug: true,
		pitch: 10,
		yaw: 180,
	};

	const style = {
		width: "900px",
		height: "500px",
	};

	function handleAddHotspot(e) {
		setPitch(mouseEventToCoords(e)[0]);
		setYaw(mouseEventToCoords(e)[1]);

	}

	return (
		<Content>
			<ReactPannellum
				id="1"
				sceneId="firstScene"
				imageSource={imagePanorama}
				config={config}
				style={style}
			/>
			<Button onClick={handleAddHotspot}>
				Take Pitch and Yaw
			</Button>
		</Content>
	);
}
