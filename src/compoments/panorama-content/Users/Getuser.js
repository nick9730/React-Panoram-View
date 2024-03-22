import {  useQuery } from "@tanstack/react-query";
import { GetUser } from "../../servers/apiAuth";





export  function Getuser() {
  
  
  const {isLoading,data:user} = useQuery({
    queryKey:["user"],
    queryFn:GetUser,
  },
 
  )



return(
    {isLoading,user ,isAuthenticated: user?.role==='authenticated'}
    
  )
}
