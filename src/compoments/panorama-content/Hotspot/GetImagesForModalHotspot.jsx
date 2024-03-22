import React from 'react'
import styled,{css } from 'styled-components'
import ModalImages from './ModalImages'

import { UseModal } from '../ModalContext/ModalContext'
import { useOutsideClick } from '../../hooks/useOutsideCalling'
import { useGetAllimages } from '../ImagesUser/useGetAllimages'
import Heading from '../../ui/Heading'
import Button from '../../ui/Button'
import { useGetOneImage } from '../ImagesUser/useGetOneImage'
import { useGetImages } from '../ImagesUser/useGetImages'






const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    z-index:999;
    backdrop-filter: blur(10px);

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    z-index: 1000;


`

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
background-color: white;
width: 800px;
height: 900px;
gap: 10px;
border-radius: 10px;
overflow-y: scroll;
border: 4px solid blue;
`

const Header = styled.div`
  width: 100%;
  height: 60px;
  
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const HeadingSpan = styled.h1`
width: 100%;
text-align:center;


`

export default function GetImagesForModalHotspot() {

 const {images} = useGetAllimages()
  const {image,ImageID} = useGetOneImage()
  

    const{setImagesModalisOpen,close} = UseModal()
  

  const ref=useOutsideClick(close)

const Imgs = images?.filter((image)=>Number(image.id)!==Number(ImageID))

  return (
  
  
    <Modal  >
   <Container ref={ref}>
    <Header>


  <HeadingSpan>
    Select your photo-tour 
  </HeadingSpan>
 
   <Button onClick={()=>setImagesModalisOpen(false)}>&times;</Button>
    </Header>
    <div>

    {Imgs?.map((image)=>
  
    <ModalImages key={image.id} image={image}/>)}
    </div>
   </Container>
    </Modal>
  
  
  )
}
