import { useEffect, useState } from "react";
import { UseModal } from "../panorama-content/ModalContext/ModalContext";

export default function Cord() {
	const { setMouseCoordinates, ModalIsOpened } = UseModal();

	const mouseMoveHandler = (event) => {
		setMouseCoordinates({
			x: event.clientX,
			y: event.clientY,
		});
	};

	useEffect(() => {
		if (ModalIsOpened) {
			window.addEventListener("click", mouseMoveHandler);
			return () => {
				window.removeEventListener("click", mouseMoveHandler);
			};
		}
	}, []);

	return <></>;
}
