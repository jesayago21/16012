import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

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

app.get('/', async (rep, res) =>{
    console.log('Mi primer endpoint')
    res.status(200).send('Hola mundo mi primera API')
})

