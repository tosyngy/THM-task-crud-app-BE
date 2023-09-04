import { IUser , IUserModel} from "./../types/user"
import { model, Schema} from "mongoose"
import bcrypt from 'bcrypt';
const saltRounds = 8


const userSchema: Schema<IUser> = new Schema({
    username: { type: String, unique: true },
    password: { type: String }
});

userSchema.pre('save', async function (next: any) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, saltRounds);
    }
    next();
})

export default model<IUser>("User", userSchema)