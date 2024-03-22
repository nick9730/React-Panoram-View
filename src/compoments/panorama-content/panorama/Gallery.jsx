
import OperationsButtons from "./OperationsButtons";
import Presentation from "./Presentation";
import styled from "styled-components";
import Menus from '../../ui/Menus';
import ClipLoader from "react-spinners/ClipLoader";
import { useGetImages } from "../ImagesUser/useGetImages";
const StyledGallery = styled.div`
  display: flex;
  flex-direction:row;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
 
`
const StyledClip = styled.div`
  
  display: flex;
  flex-direction:row-reverse;
  width: 100%;
  height: 50vh;
  justify-content: center;
  align-items: center;
`

export default function Project() {

 

  
 
 
  return (

    <StyledGallery>

      <Menus>

      <OperationsButtons/>
      <Presentation/>
      </Menus>

    </StyledGallery>
    
  )
}
