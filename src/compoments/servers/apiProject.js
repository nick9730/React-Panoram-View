
import supabase   from "./supabase";



 export async function getProject(id){
    const { data: project, error } = await supabase
  .from('project_userId')
  .select('*', 'user(*)')
  .eq('user_id', id )
  




  if(error){
    throw new Error ("Projects cound not be loaded")
  }
  return project
}


export async function deleteProject(id){
  const {data:project,error} = await supabase.from('project_userId').delete().eq("id",id)


  if(error){
    throw new Error ('Projects could not be deleted')
  }
  return project
}


export async function createProject(newProject,id){ 

  const { data:project, error } = await supabase
  .from('project_userId')
  .insert([
   {...newProject}
  ])
  .select()

  if(error){throw  new Error("Projects could not be updated")}
  return project
}

export async function  editProject(id,newProject){

  const { data, error } = await supabase
  .from('project_userId')
  .update({ ...newProject})
  .eq("id", id)
  .select()
  .single()


  if(error){throw  new Error("Projects could not be edited")}

  return data

}
