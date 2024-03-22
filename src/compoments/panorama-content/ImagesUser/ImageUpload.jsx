

import React, { useState } from 'react'
import Input from '../../ui/Input'
import { Getuser } from '../Users/Getuser';
import { useParams } from 'react-router-dom';
import { UploadImages } from '../../servers/apiImages';


export default function ImageUpload() {

    const [image,setImage] = useState();
    const {user} = Getuser(); 
     
  const {id:user_id} = user
 const {id:param_id} = useParams()





    function handleSubmit(){
   
   UploadImages(image,user_id)
 
  
    }



  return (



    <div onSubmit={handleSubmit}>
        <Input  accept='/*' onChange={(e)=>(setImage(e.target.files[0]))}  type='file' placeholder='Upload your Image'/>
  
 <button onClick={handleSubmit} type='submit'>afdsa</button>

 
    </div>
  )
}
 