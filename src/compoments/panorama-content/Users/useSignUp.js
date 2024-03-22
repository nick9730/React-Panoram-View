

import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { GetSignUp } from "../../servers/apiAuth";
import {useNavigate} from 'react-router-dom'

export function useSignUp(){

  const navigate = useNavigate();

  const queryClient = useQueryClient();


  const { isLoading:isSingingUp,mutate:SignedUp} = useMutation({
    mutationFn:GetSignUp,
    onSuccess:(user)=>{
        toast.success("User has succefully created")
       
        navigate('/login', { replace: true });
     
    }

  })
 return {isSingingUp,SignedUp}
}