import { model, Schema } from "mongoose"

export interface IUser {
    employeeCode?: string;
    name? : string;
    age?: number;
    salary?: string;
    branch?: string;
    
}

const userSchema = new Schema<IUser>({
    employeeCode: String,
    name : String,
    age: Number,
    salary: String,
    branch: String
});

const User = model<IUser>('user', userSchema);
export {User}