import { Router } from "express";
import { createTask, deleteAllTasks, deleteOneTask, getAllTasks, updateTask } from "../controlers/task.controler.js";

const router = Router()

router.get('/' , (req,res) => {res.send("sanity check")} )

router.post('/new' , createTask)
router.get("/all" , getAllTasks)

router.put('/update/:id' , updateTask)


router.delete("/delete/all" , deleteAllTasks)
router.delete('/delete/:id' , deleteOneTask)



export {
    router
}