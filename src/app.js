import express from "express";
import morgan from "morgan";
import cors from "cors";

import doorRoutes from './routes/door.routes';

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.get('/', (req, res)=>{
    res.status(200).json({message: "Bienvenido a la api"})
});
app.use('/api', doorRoutes);

export default app;