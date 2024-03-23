import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
	${(props) =>
		props.type === "regular" &&
		css`
			display: grid;

			grid-template-columns: 50fr 160fr;
			width: 65rem;

			padding: 1.2rem 0;
			color: black;
			font-family: "Roboto";
			font-size: 20px;

			&:first-child {
				padding-top: 0;
				border-bottom: none;
			}

			&:last-child {
				padding-bottom: 0;
			}

			&:not(:last-child) {
				border-bottom: 1px solid var(--color-grey-100);
			}

			&:has(button) {
				display: flex;
				justify-content: flex-end;
				gap: 1.2rem;
			}
		`}

	${(props) =>
		props.type === "sign" &&
		css`
			display: grid;
			align-items: center;
			grid-template-columns: 50fr 0fr;

			gap: 1.4rem;
			padding: 1.2rem 0;
			color: black;
			font-family: "Roboto";
			font-size: 20px;
			gap: 50px;
			&:first-child {
				padding-top: 0;
				border-bottom: none;
			}

			&:last-child {
				padding-bottom: 0;
			}

			&:not(:last-child) {
				border-bottom: 1px solid var(--color-grey-100);
			}

			&:has(button) {
				display: flex;
				justify-content: flex-end;
				gap: 1.2rem;
			}
		`}

${(props) =>
		props.type === "settings" &&
		css`
			display: grid;
			align-items: center;
			grid-template-columns: 50fr 160fr;
			gap: 1.4rem;
			width: 55rem;
			color: black;
			font-family: "Roboto";
			font-size: 20px;
			gap: 50px;
			&:first-child {
				padding-top: 0;
				border-bottom: none;
			}

			&:last-child {
				padding-bottom: 0;
			}

			&:not(:last-child) {
				border-bottom: 1px solid var(--color-grey-100);
			}

			&:has(button) {
				display: flex;
				justify-content: flex-end;
				gap: 1.2rem;
			}
		`}
${(props) =>
		props.type === "autoload" &&
		css`
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1.4rem;
			padding: 1.2rem 0;
			width: 50rem;
			color: black;
			font-family: "Roboto";
			font-size: 20px;
			gap: 50px;
			&:first-child {
				padding-top: 0;
				border-bottom: none;
			}

			&:last-child {
				padding-bottom: 0;
			}

			&:not(:last-child) {
				border-bottom: 1px solid var(--color-grey-100);
			}

			&:has(button) {
				display: flex;
				justify-content: flex-end;
				gap: 1.2rem;
			}
		`}


${(props) =>
		props.type === "upload" &&
		css`
			display: grid;
			align-items: center;
			grid-template-columns: 50fr 160fr;
			gap: 1.4rem;
			width: 55rem;
			color: black;
			font-family: "Roboto";
			font-size: 20px;
			gap: 50px;
			&:first-child {
				padding-top: 0;
				border-bottom: none;
			}

			&:last-child {
				padding-bottom: 0;
			}

			&:not(:last-child) {
				border-bottom: 1px solid white;
			}

			&:has(button) {
				display: flex;
				justify-content: flex-end;
				gap: 1.2rem;
			}
		`}



${(props) =>
		props.type === "uploadinfo" &&
		css`
			display: grid;

			grid-template-columns: 60fr 160fr;
			width: 145rem;
			align-items: center;
			justify-content: center;
			padding: 1.2rem 0;
			color: black;
			font-family: "Roboto";
			font-size: 20px;

			&:first-child {
				padding-top: 0;
				border-bottom: none;
			}

			&:last-child {
				padding-bottom: 0;
			}

			&:not(:last-child) {
				border-bottom: 1px solid var(--color-grey-100);
			}

			&:has(button) {
				display: flex;
				justify-content: flex-end;
				gap: 1.2rem;
			}
		`}


${(props) =>
		props.type === "uploadimage" &&
		css`
			display: grid;

			grid-template-columns: 60fr 100fr;
			width: 95rem;
			align-items: center;
			justify-content: center;
			padding: 1.2rem 0;
			color: black;
			font-family: "Roboto";
			font-size: 20px;
			gap: 20px;
			&:first-child {
				padding-top: 0;
				border-bottom: none;
			}

			&:last-child {
				padding-bottom: 0;
			}

			&:not(:last-child) {
				border-bottom: 1px solid var(--color-grey-100);
			}

			&:has(button) {
				display: flex;
				justify-content: flex-end;
				gap: 1.2rem;
			}
		`}
`;
StyledFormRow.defaultProps = {
	type: "regular",
};

export default StyledFormRow;
