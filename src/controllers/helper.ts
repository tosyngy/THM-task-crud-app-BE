import { ITask } from "../types/task"
import { Response } from "express"

export const confirmError = (body: Pick<ITask, "name" | "description">, res: Response): Boolean => {
    if (body.name == null) {
        console.log("input error: name")
        res
            .status(400)
            .json({ message: "Mandatory field: name is missing. " })
        return true
    }
    if (body.description == null) {
        console.log("input error: description")
        res
            .status(400)
            .json({ message: "Mandatory field: description is missing. " })
        return true

    }
    return false
}


