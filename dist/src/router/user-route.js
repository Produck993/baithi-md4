"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user-controller"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
exports.userRoute = (0, express_1.Router)();
exports.userRoute.get('/', user_controller_1.default.getAll);
exports.userRoute.get('/create', user_controller_1.default.getCreateUserForm);
exports.userRoute.post('/create', upload.none(), user_controller_1.default.createUser);
exports.userRoute.post('/delete/:id', user_controller_1.default.deleteUser);
exports.userRoute.get('/update/:id', user_controller_1.default.getUpdate);
exports.userRoute.post('/update/:id', upload.none(), user_controller_1.default.postupdateUser);
exports.userRoute.get('/sort', user_controller_1.default.sortBranch);
exports.userRoute.get('/search', user_controller_1.default.searchByName);
exports.userRoute.get('/detail/:id', user_controller_1.default.getDetail);
//# sourceMappingURL=user-route.js.map