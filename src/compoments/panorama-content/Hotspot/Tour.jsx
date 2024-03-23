import React from "react";
import styled from "styled-components";

import { Pannellum } from "pannellum-react";
import { useGetOneImage } from "../ImagesUser/useGetOneImage";
import { useHotspot } from "../Hotspot/useHotspot";
import { UseModal } from "../ModalContext/ModalContext";
import Cord from "../../hooks/Cord";
import ModalContainer from "../ModalContext/ModalContainer";
import { useGetTour } from "./useGetTour";

const StyledHotspot = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

const PositionButton = styled.div`
	width: 10%;
	display: flex;
	flex-direction: row;
	margin-left: 20px;
`;

export default function Tour() {
	const { data, isLoading } = useGetTour();
	const { hotspots } = useHotspot();
	const {
		isOpen,
		setHotspotID,
		setIndex,
		setIsOpen,
		setModalIsOpened,
		ModalIsOpened,
	} = UseModal();

	if (!data) return;

	const imagePanorama = data[0]?.image;

	return (
		<StyledHotspot>
			<Pannellum
				image={imagePanorama}
				autoLoad={true}
				width="800px"
				height="500px"
				autoRotate={1}
				vOffset={10}
				hOffset={110}
				pitch={10}
				yaw={180}
				hotspotDebug={true}
			>
				{hotspots?.map((hotspot, i) => (
					<Pannellum.Hotspot
						cssClass={hotspot.cssClass}
						pitch={hotspot.pitch}
						yaw={hotspot.yaw}
						type={"custom"}
						key={hotspot.id}
						handleClick={() => {
							setHotspotID(hotspot.id);
							setIsOpen(true);
							setModalIsOpened(true);
							console.log();
							setIndex(i);
						}}
					></Pannellum.Hotspot>
				))}
			</Pannellum>
			{isOpen && <ModalContainer />}
			{(isOpen || ModalIsOpened) && <Cord />}
		</StyledHotspot>
	);
}
