import React from "react";
import Button from "../../ui/Button";

export default function ButtonAddHotspot({
	children,
	close,
}) {
	return <button onClick={close}>{children}</button>;
}
