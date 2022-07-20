import express from "express";
import {planetsRouter} from "./routes/planets/planets.router.js";


const app = express();
app.use(express.json());
app.use(planetsRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started and listening on port: ${PORT}...`);
})