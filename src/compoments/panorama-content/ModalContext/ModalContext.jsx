import { createContext, useContext, useState } from "react";

const ModelContexet = createContext();

function ModalContext({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [ImagesModalisOpen, setImagesModalisOpen] =
		useState(false);
	const [coords, setCoords] = useState();
	const [mouseCoordinates, setMouseCoordinates] = useState({
		x: 0,
		y: 0,
	});
	const [hotspotID, setHotspotID] = useState();
	const [ModalIsOpened, setModalIsOpened] = useState(false);
	const [index, setIndex] = useState();
	const [pitch, setPitch] = useState();
	const [yaw, setYaw] = useState();

	const close = () => {
		setIsOpen(false);
		setModalIsOpened(false);
		setImagesModalisOpen(false);
	};

	return (
		<ModelContexet.Provider
			value={{
				isOpen,
				coords,
				setCoords,
				mouseCoordinates,
				yaw,
				setPitch,
				setYaw,
				pitch,
				setMouseCoordinates,
				setIsOpen,
				close,
				hotspotID,
				setHotspotID,
				ModalIsOpened,
				setModalIsOpened,
				index,
				setIndex,
				ImagesModalisOpen,
				setImagesModalisOpen,
			}}
		>
			{children}
		</ModelContexet.Provider>
	);
}

function UseModal() {
	const context = useContext(ModelContexet);
	if (!context) return;
	return context;
}

export { UseModal, ModalContext };
