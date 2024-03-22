import React from 'react'
import styled from 'styled-components';
import StyledFormRow from './StyledFormRow';





const Label = styled.label`
  font-weight: 500;
  font-family: Roboto;

`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;






export default function FormRow({label,error,children, type}) {
  return (
    <StyledFormRow type= {type ? type : 'regular'} >
       {label && <Label htmlFor={children.props.id}>{label}</Label>}
       {children}
        {error && <Error>{error}</Error>}
      </StyledFormRow>
  )
}
