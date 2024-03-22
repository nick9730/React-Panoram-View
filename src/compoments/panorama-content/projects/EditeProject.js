
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProject } from '../../servers/apiProject';
import toast from "react-hot-toast";



export function EditProject(){

    const queryProject  = useQueryClient();

    const {isLoading:isEditing,mutate:editedProject} = useMutation({
        mutationFn:({id,newProject}) => editProject(id,newProject),
        onSuccess:()=>{
        
            toast.success("Project has succefully edited")
            queryProject.invalidateQueries({
              queryKey:["project_userId"]
            })
          }
    })
    return {isEditing,editedProject}
}

