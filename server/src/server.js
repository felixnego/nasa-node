import express from "express";
import cors from "cors";
import { planetsRouter } from "./routes/planets/planets.router.js";
import { loadPlanetsData } from "./models/planets.model.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(planetsRouter);

const PORT = process.env.PORT || 3001;

await loadPlanetsData();

app.listen(PORT, () => {
    console.log(`Server started and listening on port: ${PORT}...`);
})