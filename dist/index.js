"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./src/router/router");
dotenv_1.default.config();
const PORT = 3000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set("views", './src/views');
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('', router_1.router);
mongoose_1.default.connect('mongodb://localhost:27017/fptmanager1').then(() => {
    console.log('Connect success!');
}).catch(e => {
    console.log(e);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map