import cors from 'cors';
import express from 'express';

const app = express()
const port = 3005


app.use(cors({origin: '*'})) //Habilitar 
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: false}))

app.listen(port, () => {
    console.log(`Api corriendo en: http://localhost:${port}`)
})

app.get('/', async (rep, res) =>{
    console.log('Mi primer endpoint')
    res.status(200).send('Hola mundo mi primera API')
})



