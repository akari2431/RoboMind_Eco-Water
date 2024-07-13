import { Server } from 'azle';
import express from "express";


export default Server(() => {
    const app = express();
    app.use(express.json());

    app.get('/sensors', (req, res) => {
        const sensors = [
            {
                name: "Humedad",
                edad: 25
            },
            {
                name: "pH",
                edad: 8
            },
            {
                name: "Nivel",
                edad: 5
            },
            {
                name: "Fugas",
                edad: 15
            },
            {
                name: "Mantenimiento",
                edad: 10
            },
        ];
        return res.status(200).json(sensors)
    })

    return app.listen();
})