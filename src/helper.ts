import { ITask } from "./types/task"
import { Response } from "express"
import { IUser } from "./types/user"

export const confirmError = (body: Pick<ITask, "name" | "description">, res: Response): Boolean => {
    if (validate(body.name)) {
        console.log("input error: name")
        res
            .status(400)
            .json({ message: "Name be alphanumeric up to 3 character, special characters not allow!!!" })
        return true
    }
    if (body.description.length < 2) {
        console.log("input error: description")
        res
            .status(400)
            .json({ message: "Description must be up to 3 character!!!" })
        return true

    }
    return false
}

export const confirmUserError = (body: Pick<IUser, "username" | "password">, res: Response): Boolean => {
    if (validate(body.username)) {
        console.log("input error: username")
        res
            .status(400)
            .json({ message: "Username must be alphanumeric up to 3 character, special characters not allow!!!" })
        return true
    }
    if (body.password?.length < 3) {
        console.log("input error: password")
        res
            .status(400)
            .json({ message: "Password must be up to 3 character!!!" })
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

export const validate = (value: string): Boolean => {
    return !/^[a-zA-Z0-9]{3,}$/.test(value)
}
