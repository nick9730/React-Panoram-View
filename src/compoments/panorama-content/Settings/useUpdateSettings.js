import { updateSettings } from "../../servers/apiSetting";
import { Getuser } from "../Users/Getuser";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";





export function useUpdateSettings(){

const queryProject = useQueryClient();


const { mutate : UpdateSettings , isLoading} = useMutation({
    mutationFn : ({id,newSetting}) =>updateSettings(id,newSetting),
    onSuccess:()=>{
        toast.success("Settings have updated")
        queryProject.invalidateQueries({
          queryKey:["settings"]
        })
    } 
})

 return{UpdateSettings,isLoading}

}




