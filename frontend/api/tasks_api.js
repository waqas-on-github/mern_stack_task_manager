import axios from "axios";

const postTask = async (data) => await axios.post("/api/v1/task/new" , data)
    





export {postTask}


