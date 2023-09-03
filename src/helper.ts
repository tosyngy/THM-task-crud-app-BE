import { ITask } from "./types/task"
import { Response } from "express"
import { IUser } from "./types/user"
import { json } from "stream/consumers"

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

export const confirmUserError = (body: Pick<IUser, "username" | "password">, res: Response): Boolean => {
    if (body.username == null) {
        console.log("input error: username")
        res
            .status(400)
            .json({ message: "Mandatory field: username is missing. " })
        return true
    }
    if (body.password == null) {
        console.log("input error: description")
        res
            .status(400)
            .json({ message: "Mandatory field: password is missing. " })
        return true

    }
    return false
}
// 404 error for undefined paths
export const invalidPathHandler = (error: any, res: Response) => {
    res
        .status(404)
        .send({ message: `Invalid path ${error.message || ''}`, status: 404 });
}

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error);
}

export const getId = (authorization: string = ".") => {
    const auth_0: string = authorization
    const claims: any = atob(auth_0.split('.')[1])
    const claims_obj = JSON.parse(claims)
    const { _id } = claims_obj;
   
    return _id
}