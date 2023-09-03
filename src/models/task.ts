import { ITask } from "./../types/task"
import { model, Schema } from "mongoose"
const taskSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: false,
      default: false
    }, 
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Refers to the "User" model
    },
  },
  { timestamps: true }
)



// { "name":"tosin","description":"tosin"}
// { "name":"task 1","description":"my task", "status":false}
export default model<ITask>("Task", taskSchema)