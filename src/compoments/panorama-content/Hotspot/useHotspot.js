


import { useQuery,useQueryClient } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { getHotspot } from "../../servers/apiHotspots";


 export function useHotspot(){

    const queryProject = useQueryClient()


    const {id:ParamsID} = useParams()
    console.log(ParamsID)

const {data:hotspots, isLoading} = useQuery({
    queryFn:()=>getHotspot(ParamsID),
    queryKey:['hotspot','ParamsID'],
    refetch:()=>
    queryProject.invalidateQueries({
      queryKey:['hotspot','ParamsID']
    })
}
) 
return{hotspots,isLoading}
}