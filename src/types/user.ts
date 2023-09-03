import { Document, Schema } from "mongoose"

export interface IUser extends Document {
  username: string
  password: string
  task?: string
}


export interface IUserModel extends IUser, Document {}
