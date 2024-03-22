import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import AddImages from "../ImagesUser/AddImages";
import { useUpdateImage } from '../ImagesUser/useUpdateImage'
import PacmanLoader from "react-spinners/PacmanLoader";


const StyledOperationButton = styled.nav`

  gap: 0.8rem;
  padding: 6px;


`

 const ButtonPosition = styled.div` 

   
 position: fixed;
 right: 100px;
   top: 400px;
 `
 const BackGroundPacman =  styled.div`
  
 background-color: white;
 z-index: 999;
 width: 100px;
 height: 100px;
 position: absolute;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 top: -5px;
 filter: blur(10px);
`


export default function OperationsButtons() {


  const {isCreating,UpdatedImages} = useUpdateImage()



  if(isCreating) return <PacmanLoader   color="rgba(54, 215, 183, 1)"   margin={4}  />

  return (
    <StyledOperationButton>
      <ButtonPosition>
      <Modal  >
  <Menus.Menu >

<Modal.Open opens='add'>
<Button type="primary">Add Panorama Image</Button>
</Modal.Open>
   

<Modal.Window name='add'>
<AddImages/> 
</Modal.Window>

  </Menus.Menu>
</Modal>
 
 
        </ButtonPosition>

    </StyledOperationButton>
  )
}
