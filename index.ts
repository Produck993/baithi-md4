import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import { router } from './src/router/router';

dotenv.config();
const PORT = 3000;
const app = express();


app.set('view engine', 'ejs')
app.set("views", './src/views')
app.use(bodyParser.json());
// app.use(express.static('assets'))

app.use(cors());

app.use('',router)
mongoose.connect('mongodb://localhost:27017/fptmanager1').then(() => {
    console.log('Connect success!')
}).catch(e => {
    console.log(e);
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
