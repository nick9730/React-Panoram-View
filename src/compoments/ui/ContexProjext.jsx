// import  {  createContext, useCallback, useContext, useEffect,  } from 'react'
// import { useReducer } from "react"
// import toast  from 'react-hot-toast';

// const BaseUrl  =  "http://localhost:7000";

// const InitialState = {
//   projects: [],
//   isLoading : false,
//   currentProject : {},
//   error : '',
//   success:true,
//   status:""

// }

// function reducer(state,action){

//   switch(action.type){
//     case   "status" :
//     return{
//       ...state,
//       status:action.payload
//     }
//     case "success":
//     return{
//       ...state,
//       success:false
//     }
//     case "loading" :
//       return {
//         ...state,
//         isLoading:true
//       }
//      case "projects/loaded" :
//      return {
//       ...state,
//       isLoading:false,
//       projects:action.payload
//      }
//      case "project/loaded":
//       return {
//         ...state,
//          isLoading:false,
//          currentProject:action.payload,

//       }
//       case "project/created":
//         return{
//           ...state,
//           isLoading:false,
//           projects : [...state.projects,action.payload],
//           currentProject:action.payload,
//         }

//       case "project/deleted":
//         return{
//           ...state,
//           isLoading:false,
//           projects:state.projects.filter((project)=>project.id !==action.payload),

//         }
//         case "project/update":
//           return{
//             ...state,
//             isLoading:false,
//             projects:[...state.projects,action.payload],
//             currentProject:action.payload,

//           }
//      case "rejected" :
//       return{
//         ...state,
//         isLoading:false,
//         error:action.payload
//       }
//       default :  return {...InitialState}
//     }

// }

// const ProjectContext = createContext();

// function ContexProjext({children}) {

//   const [{status,projects,currentProject,isLoading,success},dispatch] = useReducer(reducer,InitialState)

//     // const [isLoading,setIsLoading] = useState(false)
//   // const [message,setMessage] = useState('')
//   // const [project,setProject] = useState([])
//   // const [newPro,setnewProject] = useState([])

//   // const [currentData,setCurrentData] = useState([])

//     useEffect(function(){
//       const controller = new AbortController();
//         async function getProjects(){
//        dispatch({type:"loading"})
//          try {
//              const response = await fetch(`${BaseUrl}/projects/`,{

//                 signal:controller.signal

//              });
//               const data = await response.json()

//             return  dispatch({type:"projects/loaded",payload:data})

//                }

//          catch (error) {
//                 dispatch({type:"rejected",payload: 'There was one problem with loading of icons'})

//          }
//          return ()=>controller.abort();
//      }
//     getProjects();

//     },[])

//    const appearProject= useCallback(async function appearProjects(id,controller){

//     if(currentProject?.id===Number(id))return

//     dispatch({type:"loading"})
//     try {

//       const response  = await fetch(`${BaseUrl}/projects/${id}`,
//       {
//         signal:controller.signal
//       })
//       const data = await response.json();
//    dispatch({type:"project/loaded",payload:data})
//     } catch (error) {
//       dispatch({type:"rejected",payload: 'There was one problem with loading of currentProject'})

//     }

//     },[currentProject?.id])

//     async function createProject(newProject){
//       dispatch({type:"loading"})
//       try
//       {

//         const res = await fetch(`${BaseUrl}/projects/`,
//         {
//           method :"POST",
//           body: JSON.stringify(newProject),
//           headers:{
//             "Content-Type" : "application/json"
//           }

//         }

//         );
//         const data = await res.json();
//         if(dispatch({type:"project/created",payload:data})) return toast.success('Nikos')

//       }

//     catch{
//       dispatch({type:"rejected",payload: 'There was one problem with loading of icons'})

//     }

//   }

//     async function deleteProject(id){
//       dispatch({type:"loading"})
//       try
//       {

//           await fetch(`${BaseUrl}/projects/${id}`,
//         {
//           method:   "DELETE"
//         }

//         );

//       dispatch({type:"project/deleted",payload:id})

//       }

//     catch{
//       dispatch({type:"rejected",payload: 'There was one problem with deleted of project'})
//       dispatch({type:"success"})

//     }
//  finally{
//   dispatch({type:"status",payload:"isDeleting"})

//  }
//   }

// async function Update(id,replaceItem){
//   dispatch({type:"loading"})
//     try
//     {

//      const res =await fetch(`${BaseUrl}/projects/${id}`,
//      {
//       method:'PUT',
//       body: JSON.stringify(replaceItem),
//       headers:{
//         "Content-Type" : "application/json"
//       }

//      });
//        const data = res.json();

//     dispatch({
//       type:"project/update",payload:data
//     })

//     dispatch({type:"status",payload:"isUpdating"})

//     }

//   catch{  dispatch({type:"success"})
//     dispatch({type:"rejected",payload: 'There was one problem with loading of icons'})

//   }

// }

//   return (
//     <ProjectContext.Provider value= {{status,success,isLoading,projects,currentProject,appearProject,deleteProject,Update,createProject}}>
//         {children}
//     </ProjectContext.Provider>
//   )
// }

// function useProjects(){
//   const contect = useContext(ProjectContext);
//   if(contect===undefined) throw new Error("Den bghke")
//   return contect
// }

// export {ContexProjext,useProjects}
