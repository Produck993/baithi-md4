

import {Router} from "express";
import userController from "../controller/user-controller";
import multer from 'multer';
const upload = multer();
export const userRoute = Router();
userRoute.get('/', userController.getAll);
userRoute.get('/create', userController.getCreateUserForm);
userRoute.post('/create',upload.none(), userController.createUser);

userRoute.post('/delete/:id', userController.deleteUser);

userRoute.get('/update/:id', userController.getUpdate);
userRoute.post('/update/:id',upload.none(), userController.postupdateUser);

userRoute.get('/sort', userController.sortBranch);

userRoute.get('/search', userController.searchByName);

userRoute.get('/detail/:id', userController.getDetail);


