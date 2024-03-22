

import React from 'react'

import  FormRow from '../../ui/FormRow'
import Input from "../../ui/Input";
import Form from '../../ui/Form';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

import styled from 'styled-components'
import { useAddHotspot } from './useAddHotspot';
import { useProjects } from '../../context/ContextProjext';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import { UseModal } from '../ModalContext/ModalContext';


const Inputinvisible = styled.input`
   visibility:  none;
   opacity: 0;
`

const PositionButton = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 20px;
`
export default function AddHotspotTour({onCloseModal}) {

    const {register,handleSubmit} = useForm({
        defaultValues:
        {'type' : 'custom'}

    })


    const {pitch,yaw,close } = UseModal()
    const{id:paramsId} =  useParams()

     const {AddHotspot} = useAddHotspot()

 function onSubmiten(data){


    AddHotspot({...data},
        {onSuccess:()=>onCloseModal?.()}
        )
 }


return (
<Form onSubmit={handleSubmit(onSubmiten)} >
    <FormRow>

    <Heading as='h3'>Add Hotspot Tour</Heading>
    </FormRow>
<FormRow label='Name'>
    <Input type='text'  id='name' {...register('name',{
              required:"This field is required"
          })}/>
</FormRow>
<FormRow label='pitch'>
    <Input type='number' value={pitch ? pitch : ''}  id='name' {...register('pitch',{
              required:"This field is required"
          })}/>
</FormRow>
<FormRow label='Yaw'>
    <Input type='number' value={yaw ? yaw :  ''}   id='name' {...register('yaw',{
              required:"This field is required"
          })}/>
</FormRow>
<FormRow label='Info or Custom'>
    <Input type='text' value='custom' disabled   id='type' {...register('type',{
              required:"This field is required"
          })}/>
</FormRow>

<Inputinvisible  value={paramsId} placeholder='Give a number of photos in project' {...register(
    "image_id",{
        required:"This field is required"
    }
  )}/>


<PositionButton>

<Button>Add</Button>
<Button onClick={close}>Cancel</Button>
</PositionButton>
</Form>
  )
}
