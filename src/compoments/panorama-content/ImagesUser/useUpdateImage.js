

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  UpdateImages, UploadImages } from '../../servers/apiImages';
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Getuser } from "../Users/Getuser";


export  function useUpdateImage(){

    const {user} = Getuser(); 
     
    const {id:user_id} = user
    const {id:IdParams} = useParams()
    const queryProject = useQueryClient()


const {isLoading:isCreating,mutate:UpdatedImages} = useMutation({
    mutationFn:(newImage)=>UpdateImages(newImage,user_id,IdParams) ,
    onSuccess:()=>{
        toast.success('Image has succefully created')
        queryProject.invalidateQueries({
            queryKey:["images_user"]
        })
    }
})

return {isCreating,UpdatedImages}

}

