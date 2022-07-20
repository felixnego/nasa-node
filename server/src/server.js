import express from "express";
import cors from "cors";
import { planetsRouter } from "./routes/planets/planets.router.js";
import { launchesRouter } from "./routes/launches/launches.router.js";
import { loadPlanetsData } from "./models/planets.model.js";
import morgan from "morgan";


const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(planetsRouter);
app.use("/launches", launchesRouter);

const PORT = process.env.PORT || 3001;

await loadPlanetsData();

app.listen(PORT, () => {
    console.log(`Server started and listening on port: ${PORT}...`);
})