import supabase  from "./supabase";

export async function GetUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
 
}

export async function UpdateUser({fullname,password,avatar}){

let updateData; 

if (fullname) updateData = {  data: { fullname } };
if(password) updateData={password};




    const { data, error } = await supabase.auth.updateUser(updateData)
      
      if(error) throw new Error("the user hasn't upadated")
     if(!avatar)return data

   const fileName = `avatar-${data.user.id}-${Math.random()}`;

   const {storageError} = await supabase.storage.from("avatars").upload(fileName,avatar)
 
   if(storageError) throw new Error(storageError.message)
    
   const {data:AvatarUserData,error:AvatarError} =await supabase.auth.updateUser({
    data:{

      avatar: `https://dvkoqbueyvehekvjnxjl.supabase.co/storage/v1/object/public/avatars/${fileName}`
    }
    })
 
   if (AvatarError) throw new Error(AvatarError.message);
   console.log(data)
   return AvatarUserData;


}
 



//https://dvkoqbueyvehekvjnxjl.supabase.co/storage/v1/object/public/avatars/edited.jpg?t=2023-11-30T23%3A38%3A18.681Z
export async function GetSignUp({fullname,email,password}){
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options:{

      data:{
        fullname,
        avatar:''
      }
    }
  })

  if(error) throw new Error("the user hasn't signed up")
return data 

}

export async function GetLogin({email,password}){

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if(error) throw new Error("the user hasn't signed up")

  return data
}


export async function logout(){
  const { error } = await supabase.auth.signOut()
 if(error) throw new Error('The user could`n logout')
  
}

