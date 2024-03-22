import styled from 'styled-components'
import Avatar from '../panorama-content/Users/Avatar'



const StyledHeader = styled.header`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content:space-between ;
   border: 1px solid black;
   border-left: 0px;
   padding: 50px;
  border: none;
  height: 75px;


`
const Para = styled.p`
   padding: 20px;
   font-size: 20px;
   line-height: 10px;
  font-weight:900;
  font-family: "Roboto";
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 20px;
  color:wheat;
`

const CenterDiv = styled.div`
  

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 50%;
`

export default function Header() {
  return (
    <StyledHeader>
      <CenterDiv>

      <Para>The Panorama View</Para>
      </CenterDiv>
      <Avatar/>
      </StyledHeader>
  )
}
