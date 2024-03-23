import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalContext } from "./compoments/panorama-content/ModalContext/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ModalContext>
			<App />
		</ModalContext>
	</React.StrictMode>
);
