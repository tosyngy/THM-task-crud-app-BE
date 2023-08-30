import { Response, Request } from "express"
import { ITask } from "./../../types/task"
import Todo from "../../models/task"

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITask[] = await Todo.find()
    res.status(200).json({ todos })
  } catch (error) {
    throw error
  }
}