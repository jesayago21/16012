import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { User } from './user.js';

const app = express()
dotenv.config()
const port = 3005


app.use(cors({origin: '*'})) //Habilitar 
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: false}))

const connectDB = ()=> {
    const {
        MONGO_USERNBAME,
        MONGO_PASSWORD,
        MONGO_PORT,
        MONGO_DB,
        MONGO_HOSTNAME
    } = process.env
}
const url = `mongodb://${MONGO_USERNBAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

mongoose.connect(url).then(()=>{
    console.log('Conexion exitosa')
}).catch((err)=>{
    console.log('Error')
})


app.listen(port, () => {
    connectDB
    console.log(`Api corriendo en: http://localhost:${port}`)
})

app.get('/', async (req, res) =>{
    console.log('Mi primer endpoint')
    res.status(200).send('Hola mundo mi primera API')
})

app.post('/jose', async(req, res)=>{
    try{
        var data = req.body

        var newUser = new User(data)
        await newUser.save()

        res.status(200).send('Se registro exitosamente el usuario.')
    }catch(err){
        res.status(400).send('Error')
    }
})

app.get('/usuarios', async (req, res) =>{
    try{
        var usuarios = User.find().exec()
        res.status(200).send(usuarios)
    }catch(err){
        res.status(400).send(err)
    }
})