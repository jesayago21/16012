import cors from 'cors';
import express from 'express';

const app = express()
const port = 3005


app.use(cors({origin: '*'})) //Habilitar 
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: false}))

