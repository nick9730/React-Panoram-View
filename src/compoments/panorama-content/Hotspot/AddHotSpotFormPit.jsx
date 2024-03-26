import React from 'react'
import AddHotSpotModal from './AddHotSpotModal'
import AddHotspotTour from './AddHotspotTour'
import styled from 'styled-components'
import Button from '../../ui/Button';


const Content = styled.div`
	width: 1600px;
	height: 50vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
    gap: 20px;
    `;


    export default function AddHotSpotFormPit({onCloseModal}) {

  return (
    <Content>
        <AddHotSpotModal/>
        <AddHotspotTour/>
   <Button variations={'hotspot'} onClick={onCloseModal} >
    Cancel
   </Button>
    </Content>
  )
}
