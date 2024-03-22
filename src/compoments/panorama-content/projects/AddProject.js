
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from '../../servers/apiProject';
import toast from "react-hot-toast";



export function AddProject(){

  const queryProject = useQueryClient()

 const {isLoading:isCreating,mutate:createdProject} = useMutation({
    mutationFn:createProject,
    onSuccess:()=>{
        
        toast.success("Project has succefully created")
        queryProject.invalidateQueries({
          queryKey:['project_userId']
        })
      }
 }
 
)

 return { isCreating,createdProject}
}