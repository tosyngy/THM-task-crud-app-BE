import 'express-async-errors';
import { Router } from "express"
import { getTask, getTasks, addTask, updateTask, deleteTask } from "../controllers/tasks"
import { auth } from '../middleware/auth';
import { login, register } from '../controllers/users';

const router: Router = Router()

const uri = "/api/v1"

router.post(`${uri}/auth/login`, login)
router.post(`${uri}/auth/register`, register)

router.get(`${uri}/tasks`, auth, getTasks)

router.get(`${uri}/task/:id`, auth, getTask)

router.post(`${uri}/task`, auth, addTask)

router.put(`${uri}/task/:id`, auth, updateTask)

router.delete(`${uri}/task/:id`, auth, deleteTask)


export default router