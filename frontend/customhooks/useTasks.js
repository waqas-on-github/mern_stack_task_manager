import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"


const useTasks = () => {


    const {data , isLoading , error} = useQuery({
        queryKey: ['tasks/all'] , 
        queryFn: async () => {
            const resp =  await axios.get('/api/v1/task/all')
            return resp?.data
        }, 
        onError : (error) => {
            toast.error( `status ${error?.request.status}   tasks ${error?.response?.data?.error} ` ||"some thing went wrong check you internet connection")
        }
    })

    return  {data , isLoading , error}
}



const useOneTask = () => {
    return "one task"
}



export {
    useTasks ,
    useOneTask
}
