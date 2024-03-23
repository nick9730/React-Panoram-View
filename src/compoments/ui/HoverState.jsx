import React, { useState } from "react";

export default function HoverState({ children }) {
	const [hoverState, setHoverState] = useState(false);

	function HoverOver() {
		setHoverState(true);
	}

	function HoverOut() {
		setHoverState(false);
	}

	return <div>HoverState</div>;
}
