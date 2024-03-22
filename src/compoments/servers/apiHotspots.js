

import supabase   from "./supabase";



export async function getHotspot(image_id){

    const {data:hotspots,error} = await supabase
    .from('hotspot')
    .select(' *','images_user(*)').eq('image_id',image_id)

    if(error)  throw new Error('cant make a hotspot')


      return hotspots


}


export async function updateHotspot(newHotspot){
  
    const { data, error } = await supabase
    .from('hotspot')
    .insert(
     [ {...newHotspot}],
    )
    .select()

    if(error) throw new Error ('Cant insert the row')
    return data

}


export async function deleteHotpot(id){
  const {data,error} = await supabase.from('hotspot').delete().eq("id",id)

 if(error) throw new Error('Hotspot hasn t deleted')
  return data
}


export async function  editHotspot(id,newHotspot){


  const { data, error } = await supabase
  .from('hotspot')
  .update({ ...newHotspot})
  .select()
  .eq("id", id)



  if(error){throw  new Error("Projects could not be edited")}

  return data

}
