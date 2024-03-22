import React, { useState } from 'react'
import styled from 'styled-components'
import { UseModal } from '../ModalContext/ModalContext'
import { NavLink } from 'react-router-dom'
import { useGetTour } from './useGetTour'
import { useAddTour } from './useAddTour'
import Button from '../../ui/Button'
import { useProjects } from '../../context/ContextProjext'




const Img  = styled.img`
  gap: 30px;
  width: 800px;
  height: 400px;
  margin-top: 20px;
  cursor: pointer;

  &:hover{
    filter: blur(3px);
  }
`

export default function ModalImages({image}) {

  const {AddTour} = useAddTour();
  const {data}=useGetTour()
console.log(data)
  const{close} = UseModal()
  const {setAddTour} = useProjects()
  const [tour,setTour] = useState(false)
  
  const {image:imageSup,id,name} = image
  
  const [icon_id,setId] = useState(id)

  if(!data) return
  
  
  const HandleAddTour =() => {
    setId(id)
  if(!icon_id || icon_id===undefined) return;
  const Item ={
    tour: icon_id,
    addTour:false
  
  }


  AddTour(
  {
    id:data[0]?.id,
    newTour: {...Item}
  },
 { onSuccess:()=>close?.()}

  )
}


  return (
        <Img src={imageSup} alt = {name}  onClick={HandleAddTour} />
  
  )
}
