import { useRef } from 'react'
import styled from 'styled-components'
import { useOutsideClick } from '../../hooks/useOutsideCalling'
import { useGetOneImage } from './useGetOneImage'


const Container = styled.div`
width: 100%;
height: 100%;
z-index: 999;
position: absolute;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #05000096;
top: 0;
left: 0;
`
const InfoContainer = styled.div`
width: 60%;
height: 50%;
background-color:#302F3D;
color: white;
display: flex;
flex-direction: column;

`
const H1 =styled.h1`
width: 100%;
padding: 15px;
border-bottom: 1px solid silver;
`
const P  = styled.p`
  padding: 10px;

`

export default function Infos({setShow,id}) {
   

  const ref=useOutsideClick(setShow)

  const {image} =useGetOneImage(id)

     
  if(!image) return


  return (
    <Container>
      <InfoContainer  ref={ref}>
        <H1>
          Information
        </H1>
        <P>
           {image[0]?.infos}
        </P>


      </InfoContainer>
    

    </Container>
  )
}
