import React, { useState } from "react";
import styled from "styled-components";

import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { IoIosCopy } from "react-icons/io";
import { IconContext } from "react-icons";

const Base_URL = ` http://localhost:5173`;
const Input = styled.input`
	border: 1px solid var(--color-grey-300);
	border-radius: 50px solid;
	background-color: var(--color-grey-0);
	border-radius: 20px;
	padding: 0.8rem 1.2rem;
	width: 27rem;
	font-size: 10.5px;
`;
const CopyButton = styled.div`
	font-size: 2.2rem;
	padding: 1.4rem 0.8rem;
	text-transform: uppercase;
	font-weight: 600;
	text-align: center;

	&:hover {
		color: blueviolet;
	}
`;
const StyledPosition = styled.div`
	width: 40px;
	display: flex;
	align-items: center;
`;

export default function CopiedLink({ url }) {
	const [hoverState, setHoverState] = useState(false);

	function HoverOver() {
		setHoverState(true);
	}

	function HoverOut() {
		setHoverState(false);
	}

	function handleCopy() {
		setHoverState(true);
		copy(`${Base_URL}${url.pathname}`);
		toast.success("The link has succefully copied");
	}

	return (
		<IconContext.Provider
			value={{
				color: `${hoverState ? "purple" : "black"}`,
				size: "2.5rem",
				style: {
					backgroundColor: "none",
					background: "none",
					marginTop: "1rem",
					lineHeight: "4px",
				},
			}}
		>
			<StyledPosition>
				<Input defaultValue={`${Base_URL}${url.pathname}`} />
				<CopyButton
					onMouseOver={HoverOver}
					onMouseOut={HoverOut}
					onClick={handleCopy}
				>
					<IoIosCopy />
				</CopyButton>
			</StyledPosition>
		</IconContext.Provider>
	);
}
