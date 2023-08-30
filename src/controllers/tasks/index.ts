import { Response, Request } from "express"
import { ITask } from "./../../types/task"
import Task from "../../models/task"

const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: ITask[] = await Task.find()
    res.status(200).json({ tasks })
  } catch (error) {
    throw error
  }
}

const addTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<ITask, "name" | "description" | "status">
  
      const task: ITask = new Task({
        name: body.name,
        description: body.description,
        status: body.status,
      })
  
      const newTask: ITask = await task.save()
      const allTasks: ITask[] = await Task.find()
  
      res
        .status(201)
        .json({ message: "Task added", todo: newTask, tasks: allTasks })
    } catch (error) {
      throw error
    }
  }