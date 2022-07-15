import express from "express";


const app = express();
app.use(express.json())

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started and listening on port: ${PORT}...`);
})