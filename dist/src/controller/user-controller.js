"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
class UserController {
    constructor() {
        this.getCreateUserForm = async (req, res) => {
            res.render('create');
        };
        this.createUser = async (req, res) => {
            try {
                let userData = {
                    employeeCode: req.body.employeeCode,
                    name: req.body.name,
                    age: req.body.age,
                    salary: req.body.salary,
                    branch: req.body.branch
                };
                let user = await user_1.User.findOne({ employeeCode: req.body.employeeCode });
                if (!user) {
                    console.log(userData);
                    user_1.User.create(userData);
                    res.redirect('/');
                }
                else {
                    res.render('error');
                }
            }
            catch (error) {
                res.render("error");
            }
        };
        this.deleteUser = async (req, res) => {
            let id = req.params.id;
            let product = await user_1.User.findByIdAndDelete({ _id: id });
            if (!product) {
                res.status(404).json();
            }
            else {
                await product.delete();
                res.redirect('/');
            }
        };
        this.getUpdate = async (req, res) => {
            try {
                const user = await user_1.User.findOne({ _id: req.params.id });
                if (user) {
                    res.render('update', { users: user });
                }
                else {
                    res.render('error');
                }
            }
            catch (error) {
                res.render('error');
            }
        };
        this.postupdateUser = async (req, res) => {
            console.log(req.body);
            let id = req.params.id;
            let users = await user_1.User.findById(id);
            if (!users) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await user_1.User.findByIdAndUpdate({ _id: id }, data);
                res.redirect('/');
            }
        };
    }
    async getAll(req, res) {
        try {
            const user = await user_1.User.find();
            res.render('list', { users: user });
        }
        catch (error) {
            res.render(error);
        }
    }
    async sortBranch(req, res) {
        let user = await user_1.User.find().sort({ age: 1 });
        res.render('list', { users: user });
    }
    async searchByName(req, res) {
        try {
            let keywordFind = req.query.keyword;
            const user = await user_1.User.find({
                branch: { $regex: `${keywordFind}`, $options: 'i' },
            });
            console.log(user);
            res.render('list', { users: user });
        }
        catch (error) {
            res.render(error);
        }
    }
    async getDetail(req, res) {
        try {
            let user = await user_1.User.findOne({ _id: req.params.id });
            res.render('detail', { users: user });
        }
        catch (error) {
            res.render(error);
        }
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map