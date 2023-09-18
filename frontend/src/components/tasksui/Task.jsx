/* eslint-disable react/prop-types */
import {  useState } from 'react'
import './taskui.css'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query'
import { SyncLoader } from 'react-spinners'
import DeleteTask from './DeleteTask'

const Task = ({ task }) => {
  const [completed, setCompleted] = useState(false)

   const queryClient = useQueryClient()

   const { mutate  , isLoading} = useMutation({
     mutationFn: async () => {
       await axios.put(`/api/v1/task/update/${task._id}`, { isCompleted:completed })
     },
     onSuccess: () => {
       queryClient.invalidateQueries(['tasks/all'])
       console.log("success");
     }
   })

   


  

  const handleChange = async () => {
    setCompleted(!completed)
    mutate()
  }

 


//          ##### all about spinners
const override = {
  
  display: "block",
  margin: "0 auto",
  borderColor: "black",

};

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
    <>
      <div className='onetaskcheck'>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={task?.isCompleted}
        />
            <DeleteTask  id = {task._id} />
        <h1>{task?.titile}</h1>
      </div>
    </>
  )
}

export default Task
