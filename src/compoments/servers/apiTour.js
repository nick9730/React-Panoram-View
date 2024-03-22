import supabase from "./supabase";



export async function GetTour(image_id){
     
    let {data,errors} = await supabase
    .from('images_user')
    .select(' *','images_user(*)')
    .eq('id',image_id)

    if(errors) throw new Error("Couldnt load the data")

    return data

}


export async function updateTour(image_id,newTour){
  
    const { data, error } = await supabase
    .from('images_user')
    .update({ ...newTour})
    .select()
    .eq("id", image_id)

    if(error) throw new Error ('Cant insert the row')
    return data

}