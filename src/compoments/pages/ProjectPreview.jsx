
import styled from "styled-components"
import Button from  '../ui/Button'
import Heading from '../../../../panorama/src/compoments/ui/Heading';
import Modal from '../../../../panorama/src/compoments/ui/Modal';
import ProjectPreviewItem from "../panorama-content/projects/ProjectPreviewItem"

import AddForm from "../panorama-content/projects/AddForm";
import Menus from "../ui/Menus";

import PacmanLoader from "react-spinners/PacmanLoader";
import { useGetProject } from "../panorama-content/projects/useGetProject";


const StyledRow =styled.div`
display: flex;
    flex-direction: row;
   
    justify-content: space-between;
    padding: 6px;
   
`

const StyledColumn = styled.p`
 
    padding: 10px;
    background-color: none;
    width: 20%;
   text-align: center;
   color: wheat;

`
const StyledColumnName = styled.p`
 
    padding: 10px;
    background-color: none;
    width: 20%;
   text-align: left;
   color: wheat;

`
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  
  
`
const DivLeft = styled.div`

display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
width: 100%;
margin-left:-13px;
`








export default function ProjectPreview() {
  
  const {projects,isLoading } = useGetProject()

  if(isLoading) return  <PacmanLoader   color="rgba(54, 215, 183, 1)"   margin={40}  />


  return (
   <Menus>

          <StyledContainer>
        <Heading type="h1">All Projects</Heading>
      <StyledRow>
    <StyledColumnName>
        Name
    </StyledColumnName>
    <StyledColumn>
      Number of Rooms
    </StyledColumn>
    <StyledColumn>
    Number of photos
    </StyledColumn>
</StyledRow>


        {projects?.map((project)=><ProjectPreviewItem project={project} key={project.id}/> )}
       

     <DivLeft>
<Modal>
  <Modal.Open opens="Nikos">
    <Button>Add Project</Button>
  </Modal.Open>
 <Modal.Window name="Nikos">
 <AddForm/>
 </Modal.Window>

</Modal>
      </DivLeft> 
     


 
       
    </StyledContainer>

   </Menus>
  )
}
