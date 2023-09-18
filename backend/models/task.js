import mongoose from "mongoose";



const todoschema = new mongoose.Schema({
    titile: {
        type: String,
        required: [true, "todo name is needed"]
    },
    description: {
        type: String,
        required: [true, "task disc required"]
    }
    ,
    // duedate: {
    //     type: Date,
    //     required: [true, "due date is required"]
    // }
    //  priority: {
    //     type: String ,
    //     enum: ['low', 'medium', 'high'],
    //     default: 'medium',
    // },
     isCompleted: {
        type:Boolean , 
        default : false
     },
    // lables: [String]

}, { timestamps: true })

const Task = mongoose.model('Task', todoschema)
export {
    Task
}