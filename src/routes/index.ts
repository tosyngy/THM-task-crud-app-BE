import { Router } from "express"
import {  getTask, getTasks, addTask, updateTask, deleteTask } from "../controllers/tasks"

const router: Router = Router()

router.get("/tasks", getTasks)

router.get("/task/:id", getTask)

router.post("/add-task", addTask)

router.put("/edit-task/:id", updateTask)

router.delete("/delete-task/:id", deleteTask)

export default router