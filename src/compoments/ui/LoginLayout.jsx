import React from 'react'
import SignInForm from '../panorama-content/Users/SignInForm'


import styled from 'styled-components'
import { Pannellum} from "pannellum-react";

const LoginBackground = styled.div`
  width:100%;
  height: 100vh;
  
`

const ModalSign = styled.div`
  

  position: absolute;
  z-index: 999;
  background-color: none;
  width: 100%;
  height: 100%;


`

export default function LoginLayout() {



  return (



    <LoginBackground>
      
      <ModalSign>  
         <SignInForm/>
         </ModalSign>
   
      <Pannellum
  image={'./panorama.jpg'}
  autoLoad={true}
  width="100%"
  height="100%"
  autoRotate={1}
  vOffset={1}
  pitch={10}
  yaw={10}
  showZoomCtrl={false}
  showFullscreenCtrl={false}
  
  
  />
   
      
      
      </LoginBackground>
  )
}
