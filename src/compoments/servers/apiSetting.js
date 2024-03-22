import supabase from "./supabase"



export async function getSettings(id){
    const { data: settings, error } = await supabase
  .from('settings')
  .select('*', 'user(*)')
  .eq('user_id', id )
  
  if(error){
    throw new Error ("Projects cound not be loaded")
  }
  return settings
}


export async function  updateSettings(id,newSettings){


  console.log(newSettings,id)
    const { data, error } = await supabase
    .from('settings')
    .update({...newSettings})
    .eq("id", id)
    .select()
    .single()
  
  
    if(error){throw  new Error("Projects could not be edited")}
  
    return data
  
  }
  