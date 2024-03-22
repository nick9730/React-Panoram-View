import { updateHotspot } from "../../servers/apiHotspots";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";



export function useAddHotspot(){

    const queryProject = useQueryClient()

const {mutate:AddHotspot,isLoading} = useMutation({
    mutationFn :updateHotspot,
    onSuccess :()=>{
        toast.success('Hotspot has succefully created')
        queryProject.invalidateQueries({
            querykey : ["hotspot"]
        })
    }
})

return {AddHotspot,isLoading}
}