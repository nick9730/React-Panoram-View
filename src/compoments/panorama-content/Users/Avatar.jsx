

import React from 'react'
import { Getuser } from './Getuser'

import styled from 'styled-components';
import { useLogout } from './useLogout';

import { ImExit } from "react-icons/im";
import { IconContext } from 'react-icons';
import { RxExit } from "react-icons/rx";
import { RiProjector2Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const StyledAvatar= styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  border-radius: 20px;
  padding: 1px 1px;

`
const StyledButton = styled.button`
  border: none;
  
  border-radius: 20px;
       & svg {
         color: #04FDFF;
        background-color:#23232E;  
         width: 2.4rem;
         height: 2.4rem;

       }
       & svg:hover{
        color: #067272;

       }
`


const StyledParagraph  = styled.p`
  
  color: wheat;
  font-weight: bold;
  padding: 2px 10px;
  font-family: Roboto; 
  font-size: 20px;
  border-radius: 20px;


`
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: none;
  margin-left:15px ;
  
`

export default function Avatar() {

const {logout} = useLogout(); 

  const { user } = Getuser();
  const { fullname, avatar } = user?.user_metadata;


  return (
   

    <StyledAvatar>
    <Img src={avatar} alt='nikos' />
    <StyledParagraph>{fullname}</StyledParagraph>
    <StyledButton onClick={logout}>
 <ImExit />
      
      </StyledButton>
    </StyledAvatar>
   
  )
}
