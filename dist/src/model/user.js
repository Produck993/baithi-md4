"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    employeeCode: String,
    name: String,
    age: Number,
    salary: String,
    branch: String
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.User = User;
//# sourceMappingURL=user.js.map