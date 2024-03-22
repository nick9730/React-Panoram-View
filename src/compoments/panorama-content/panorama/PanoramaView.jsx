import { Pannellum} from "pannellum-react";
import { useGetOneImage } from '../ImagesUser/useGetOneImage';
import { useHotspot } from "../Hotspot/useHotspot";
import OpetationButtonsHotspot from "../Hotspot/OpetationButtonsHotspot";
import styled from 'styled-components'
import Menus from "../../ui/Menus";

import ModalContainer from "../ModalContext/ModalContainer";
import { UseModal } from "../ModalContext/ModalContext";
import Cord from "../../hooks/Cord.jsx";





const StyledHotspot = styled.div`
  
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
`

const PositionButton = styled.div`
 width:10%;
 display: flex;
 flex-direction: row;
margin-left: 20px;
 

`




export default function PanoramaView() {

const{image,isLoading} = useGetOneImage()
const {hotspots} = useHotspot()
const {setIsOpen,isOpen,ModalIsOpened,setModalIsOpened,setIndex} = UseModal()
const {setHotspotID} = UseModal()


if (!image) return


const imagePanorama =   image[0]?.image 



return (

  <StyledHotspot >
    <Pannellum
  image={imagePanorama}
  autoLoad={true}
  width="800px"
  height="500px"
  autoRotate={1}
  vOffset={10}
  hOffset={110}
  pitch={10}
  yaw={180}
  hotspotDebug={true}
  >

{hotspots?.map((hotspot,i)=>(hotspot.type==='custom' ? <Pannellum.Hotspot cssClass={hotspot.cssClass} pitch={hotspot.pitch} yaw={hotspot.yaw} type={'custom'}  key={hotspot.id}  handleClick={ ()=>{setHotspotID(hotspot.id); setIsOpen(!isOpen);setModalIsOpened(true); setIndex(i);console.log( console.log(ModalIsOpened))}} > </Pannellum.Hotspot> :
  <Pannellum.Hotspot  key={hotspot.id} type={'info'}  pitch={hotspot.pitch} yaw={hotspot.yaw} cssClass={hotspot.cssClass} />))}

</Pannellum>


  {isOpen && <ModalContainer  /> }
  {(isOpen || ModalIsOpened )&& <Cord/> }
              
    
<PositionButton>

<Menus >
  <OpetationButtonsHotspot/>
</Menus>
</PositionButton>

</StyledHotspot>

 )
}


 

