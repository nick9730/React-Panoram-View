import styled, { css } from "styled-components";

const Form = styled.form`
	${(props) =>
		props.type === "regular" &&
		css`
			padding: 2.4rem 4rem;
			width: 120rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			background-color: red;

			/* Box */
			background-color: var(--color-grey-0);
			border: 1px solid var(--color-grey-100);
			border-radius: var(--border-radius-md);
		`}

	${(props) =>
		props.type === "modal" &&
		css`
			width: 100%;
			height: 100%;
			margin: 10px;
		`}

 ${(props) =>
		props.type === "login" &&
		css`
			width: 100rem;
			height: 40rem;

			/* Box */
			background-color: var(--color-grey-0);
			border: 1px solid var(--color-grey-100);
			border-radius: var(--border-radius-md);
		`}
    ${(props) =>
		props.type === "upload" &&
		css`
			width: 100rem;
			height: 50rem;
			background-color: hsl(0, 0%, 97.25490196078431%);

			border-radius: 20px;
			padding: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		`}
  overflow: hidden;
	font-size: 1.4rem;
`;
Form.defaultProps = {
	type: "regular",
};

export default Form;
