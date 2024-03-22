import styled from "styled-components";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Form from "../../ui/Form";
import  FormRow from '../../ui/FormRow'


const StyledConfirmDelete = styled.div`
  width: 9  0rem;
  display: flex;
  flex-direction: row;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.22rem;
  
  }


`;


const PositionItems = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.4rem;
   justify-content: flex-start;
   align-items: flex-start;
  & p {
    align-items: center;
    justify-content: center;
  } 
 
`
const PositionButtons = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
 
  align-items:center;
  margin-bottom: 80px;
  justify-content:center;
  gap: 1.6rem;
`;

 const Input = styled.input`
 border: 1px solid var(--color-grey-300);
 background-color: var(--color-grey-0);
 border-radius: var(--border-radius-sm);
 padding: 0.8rem 1.2rem;
 width: 80rem;

`;



function ConfirmDuplicate({project ,resourceName, onConfirm, disabled ,onCloseModal}) {


function handleConfirm(){


onConfirm()
onCloseModal()

}


  const {num,name,numOfPhotos} = project;

  return (

    <>

   
    <StyledConfirmDelete>
 
    <Form type='modal'>
   
   <Heading as='h2'>Duplicating Form</Heading>
<FormRow>
  <Input disabled value={name}/>
</FormRow><FormRow>
  <Input disabled value={num}/>
</FormRow><FormRow>
  <Input disabled value={numOfPhotos}/>
</FormRow>


   </Form>

<PositionItems>
  <div>

<Heading as="h3">Duplicate {resourceName}</Heading>
  </div>
      <p>
        Are you sure you want to duplicate this above {resourceName} permanently?
      </p>
    

    <PositionButtons>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={onCloseModal}>
      Cancel
        </Button>
          
        </div>
        <div>
        <Button variation="danger" disabled={disabled} onClick={handleConfirm}>
  Duplicate
        </Button>
      </div>
    </PositionButtons>
</PositionItems>
    </StyledConfirmDelete>
    </>
  );
}

export default ConfirmDuplicate;
