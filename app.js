import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import employeeRouter from './router/employeeRouter.js';
import { config } from "dotenv";

// import crypto from "crypto";

const app = express();
config({path: "./config/config.env"});


app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/employee", employeeRouter);
dbConnection();

app.get('/', (req, res) => {
    res.send("Listening on / url");
})

app.listen(4000, () => {
    console.log("Server listening on port 4000");
})