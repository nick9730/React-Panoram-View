
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editHotspot } from "../../servers/apiHotspots";



export function useEditProjectHotspot(){

    const queryProject  = useQueryClient();

    const {isLoading:isEditing,mutate:editedProjectHotspot} = useMutation({
        mutationFn:({id,newHotspot}) => editHotspot(id,newHotspot),
    
        onSuccess :()=>{
          toast.success('Hotspot has succefully edited')
          queryProject.invalidateQueries({
              querykey : ['hotspot']
          })
          }
    })
    return {isEditing,editedProjectHotspot}
}

