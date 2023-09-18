import asyncHandler from '../utils/asyncHandler.js'
import CustomError from '../utils/CustomError.js'
import { Task } from '../models/task.js'
import Joi from 'joi'


// create task controller 
const createTask = asyncHandler(async (req, res) => {
    // Destructure properties from the request body
const { titile,description} = req.body
// input validation 
const schema = Joi.object({
     titile : Joi.string().max(20).required("title required"),
     description :  Joi.string().required("description required"),
    //  duedate : Joi.date().required() ,
    //  priority : Joi.string().required() ,
      isCompleted : Joi.boolean() ,
    //  lables : Joi.array().required()
})

// checking error in schema input 
const  {error}= schema.validate(req.body) 


if(error) {
    return res.status(400).json({
        error : error.details[0].message
    })
}

//checking is task already exist  
const taskExist = await Task.findOne({titile})
if(taskExist){
    throw new CustomError("task already exist can't create duplicate items " , 400)
}

// creating new task
const task = await Task.create(req.body)
// checking for errors 
if(!task) {
    throw new  CustomError("task can not be created" , 400)
} 
// sending data to endpoint 
res.json({
  sucess : true ,
  data : task
})

})


const getAllTasks = asyncHandler(async(req, res) => {
    // get all  tasks from db 
    const tasks = await  Task.find()
  // if tasks not found due to some reason 
    if(!tasks){
        throw new CustomError("tasks not found" , 400) 
    }

    res.status(200).json({
        sucess : true ,
        tasks
    })

})

const deleteAllTasks = asyncHandler(async(req, res ) => {
    const tasks = await  Task.find()
    // if tasks not found due to some reason 
      if(!tasks){
          throw new CustomError("tasks not found" , 400) 
      }

     const deletedTasks = await Task.deleteMany()

     if(!deletedTasks){
        throw new CustomError("tasks not deleted" , 400) 

     }

     res.status(201).json({
        sucess : true , 
        deletedTasks
     })
    

})




const updateTask = asyncHandler(async(req, res) => {

    const {id } = req.params 
    const data = req.body 

    console.log(req.body);
    console.log(id);


   const isTaskExist = await Task.findById(id) 


   if(!isTaskExist) {
      throw new CustomError("task not found " , 400)
   }


  const update = await Task.findByIdAndUpdate(id , data , {new:true})

  if(!update) {
    throw new CustomError("task  canot  be updated " , 400)

  }



  res.json({
    sucess:  true ,
    update
  })

}) 




const deleteOneTask = asyncHandler(async(req, res) => {
    const {id} = req.params

    if(!id) {
      throw new CustomError("id not provided "  ,400)

    }

    const deleted = await Task.findByIdAndDelete(id)

    if(!deleted) {
      throw new CustomError("can not be deleted " , 400)
    }

    
    res.status(200).json({
      sucess:true , 
      deleted
    })


    
})




export {
     createTask 
    , getAllTasks
    , deleteAllTasks
    , updateTask
    , deleteOneTask

}