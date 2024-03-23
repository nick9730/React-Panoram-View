import React from "react";
import { useHotspot } from "../Hotspot/useHotspot";
import { UseModal } from "../ModalContext/ModalContext";
import { Pannellum } from "pannellum-react";

export default function Hospots({ hotspots }) {
	const {
		setIsOpen,
		isOpen,
		setModalIsOpened,
		setIndex,
		setHotspotID,
	} = UseModal();

	return hotspots?.map((hotspot, i) =>
		hotspot.type === "custom" ? (
			<Pannellum.Hotspot
				cssClass={hotspot.cssClass}
				pitch={hotspot.pitch}
				yaw={hotspot.yaw}
				type={"custom"}
				key={hotspot.id}
				handleClick={() => {
					setHotspotID(hotspot.id);
					setIsOpen(!isOpen);
					setModalIsOpened(true);
					setIndex(i);
				}}
			>
				{" "}
			</Pannellum.Hotspot>
		) : (
			<Pannellum.Hotspot
				key={hotspot.id}
				type={"info"}
				pitch={hotspot.pitch}
				yaw={hotspot.yaw}
				cssClass={hotspot.cssClass}
			/>
		)
	);
}
