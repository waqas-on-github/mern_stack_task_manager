import { useTasks  } from "../../../customhooks/useTasks"
import {  SyncLoader } from "react-spinners";
import DisplayTaks from "./DisplayTaks";


const Tasks = () => {
//  getting tasks from usetasks hook 
const {data , isLoading } = useTasks() 


//          ##### all about spinners
const override = {
  
  display: "block",
  margin: "0 auto",
  borderColor: "black",

};
  console.log(data);

  if(isLoading) {
    return   <SyncLoader
    loading={isLoading}
    cssOverride={override}
    size={10}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  }

//          ##### all about spinners


  return (
    // conditiona rendering 
   <>
    { (data?.sucess && data?.tasks )?
     <DisplayTaks  data = {data} /> 
    : <span>tasks not found</span>  }
   </>
  )
}

export default Tasks