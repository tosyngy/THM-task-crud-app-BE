import 'express-async-errors';
import { Router } from "express"
import {  getTask, getTasks, addTask, updateTask, deleteTask } from "../controllers/tasks"

const router: Router = Router()

const uri = "/api/v1"

router.get(`${uri}/tasks`, getTasks)

router.get(`${uri}/task/:id`, getTask)

router.post(`${uri}/task`, addTask)

router.put(`${uri}/task/:id`, updateTask)

router.delete(`${uri}/task/:id`, deleteTask)

export default router