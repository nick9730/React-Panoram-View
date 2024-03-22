import styled,{css} from "styled-components"



import  FormRow from '../../ui/FormRow'
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

import Heading from '../../ui/Heading';

import { useEditProjectHotspot } from "./useEditProjectHotspot";
import { UseModal } from "../ModalContext/ModalContext";
import { useHotspot } from "./useHotspot";
import { useOutsideClick } from "../../hooks/useOutsideCalling";


const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 100rem;
      height:40rem;
     z-index: 1000;

    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;
Form.defaultProps= {
  type: "regular",
}


const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;




export default function EditedFormHotspot() {
  
   const {hotspotID,index,close} = UseModal()
   const {hotspots} = useHotspot()


   const ref = useOutsideClick(close)

    const { handleSubmit,formState,register} = useForm({
      defaultValues:
     { 'name' : hotspots[index].name,
       'pitch' : hotspots[index].pitch,
       'yaw' : hotspots[index].yaw
    }
     
     
       
    });
    const {errors} = formState
    const {isEditing,editedProjectHotspot} = useEditProjectHotspot();
   

    


function onEdit(data){

  editedProjectHotspot({newHotspot:{...data},id:hotspotID},{onSuccess:()=>close?.()})
  
   } 


    return(
<Overlay>

  <StyledModal>

<form ref={ref}  onSubmit={handleSubmit(onEdit)}>

  <FormRow>

<Heading as='h2'>Editing Form</Heading>
</FormRow>
  <FormRow label="Pitch" error={errors?.name?.message}>
    <Input  disabled={isEditing} type="number"  {...register(
      "pitch",{required: "This field is required"}
      )} />
    </FormRow>



  <FormRow  label="Yaw" error={errors?.name?.message}>
        <Input disabled={isEditing}  {...register(
          "yaw",{
            required:"This field is required"
          }
          )}/>
   </FormRow>


  <FormRow  label="name" error={errors?.name?.message}>
  <Input disabled={isEditing} {...register(
    "name",{
      required:"This field is required"
    }
    )}/>
  </FormRow>



     <FormRow>
        <Button >Edit</Button>


        <Button onClick={close}>Cancel</Button>
     </FormRow>

</form>

    </StyledModal>
    </Overlay>



    
    
    
    )
    
    
    
}
