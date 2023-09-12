import useMutation from "@tanstack/react-query"
import { postTask } from "../api/tasks_api"

const useTaskMutation = async () => {

    const mutation = useMutation({
        mutationfn: (data) => {
            postTask(data)
        }
    })

   return  mutation 
}

export default useTaskMutation