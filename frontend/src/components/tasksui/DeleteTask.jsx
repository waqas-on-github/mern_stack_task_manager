import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"


const DeleteTask = ({id}) => {
  
  const quereyClient = useQueryClient()

  const {mutate} = useMutation({
    mutationFn :  async () => {
      return await axios.delete(`/api/v1/task/delete/${id}` )
    }, 
    onSuccess : () => {
      quereyClient.invalidateQueries(['tasks/all'])
    } 
  })


 const handelClick = async () => {
  mutate()

 }

  return (
    <> 
     <button onClick={ handelClick} > 
      Delete
     </button>
    </>
  )
}

export default DeleteTask