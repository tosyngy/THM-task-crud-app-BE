import { Response, Request, NextFunction } from "express"
import { ITask } from "./../../types/task"
import Task from "../../models/task"
import { confirmError } from "../../helper"

const getTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const tasks: ITask[] = await Task.find()
        res.status(200).json({ tasks })
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" })
        next(error)
    }
}

const getTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const tasks: ITask | null = await Task.findById(id)
        res.status(200).json({ tasks })
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" })
        next(error)
    }
}

const addTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const body = req.body as Pick<ITask, "name" | "description" | "status">
        if (confirmError(body, res)) {
            return
        }
        const task: ITask = new Task({
            name: body.name,
            description: body.description,
            status: body.status,
        })

        const newTask: ITask = await task.save()
        const allTasks: ITask[] = await Task.find()

        res
            .status(201)
            .json({ message: "Task added", task: newTask, tasks: allTasks })
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" })
        next(error)
    }
}

const updateTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        const {
            params: { id },
            body,
        } = req

        const updateTask: ITask | null = await Task.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTasks: ITask[] = await Task.find()
        res.status(200).json({
            message: "Task updated",
            task: updateTask,
            tasks: allTasks,
        })
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" })
        next(error)
    }
}

const deleteTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const deletedTask: ITask | null = await Task.findByIdAndRemove(
            req.params.id
        )
        const allTasks: ITask[] = await Task.find()
        res.status(200).json({
            message: "Task deleted",
            task: deletedTask,
            tasks: allTasks,
        })
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" })
        next(error)
    }
}

export { getTasks, getTask, addTask, updateTask, deleteTask }