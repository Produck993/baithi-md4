
import { NextFunction, Request, Response } from "express";
import { User } from "../model/user";

class UserController{
    async getAll  (req: Request, res: Response)  {
        try {
            const user = await User.find();
            res.render('list', { users: user })
        } catch (error) {
            res.render(error)
        }
    }

    getCreateUserForm = async (req: Request, res: Response) => {
        res.render('create');
    }


    createUser = async (req : Request, res : Response) => {
        try {
            let userData = {
                employeeCode : req.body.employeeCode,
                name: req.body.name,
                age : req.body.age,
                salary : req.body.salary,
                branch : req.body.branch
            }
            let user = await User.findOne({employeeCode : req.body.employeeCode})
            if (!user) {
                console.log(userData)
                User.create(userData);
               res.redirect('/')
            } else {
                res.render('error')
            }
        
    } catch (error) {
        res.render("error")
    }
    }


    deleteUser = async (req: Request, res: Response) => {
        let id = req.params.id
        let product = await User.findByIdAndDelete({ _id: id });
        if (!product) {
            res.status(404).json();
        } else {
            await product.delete();
            res.redirect('/')
        }
    }


    getUpdate = async (req: Request, res: Response) => {
        try {
            const user = await User.findOne({ _id: req.params.id });
            if (user) {
                res.render('update', { users: user })
            } else {
                res.render('error')
            }
        } catch (error) {
            res.render('error')
        }
    }
    postupdateUser =  async(req: Request, res: Response)=>{
        console.log(req.body)
        let id = req.params.id;
        let users = await User.findById(id);
        if(!users) {
            res.status(404).json()
        }
        else {
            let data = req.body;
            await User.findByIdAndUpdate({_id:id}, data);
            // data._id = id
            // users = await User.findById(id)
            res.redirect('/')
        }
    }

     async sortBranch(req: Request, res: Response ) {
        let user = await User.find().sort({age: 1})
      
        res.render('list', {users: user})
    }

     async searchByName (req: Request, res: Response ) {
        try {
            let keywordFind = req.query.keyword
            const user = await User.find({
                branch :  {$regex: `${keywordFind}`, $options: 'i'},        
            });
            // res.send(products)
            console.log(user);
            
            res.render('list', {users : user})
        } catch (error) {
            res.render(error);
        }
    }


     async getDetail (req: Request, res : Response) {
        try {
            let user = await User.findOne({ _id : req.params.id })
            res.render('detail', {users : user})
        } catch (error) {
            res.render(error)
        }
    }
}
export default new UserController();