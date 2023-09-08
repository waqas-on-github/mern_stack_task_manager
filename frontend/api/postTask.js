import axios from "axios";

const postTask = (data) => {
    return axios.post("/api/v1/task/new" , data)
}

export {postTask}


