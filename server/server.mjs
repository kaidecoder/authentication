import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import cors from "cors"
import dotEnv from "dotenv"
dotEnv.config()
const app = express()
const PORT = process.env.PORT
import workoutRoutes from "./routes/workouts.mjs"

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/workouts", workoutRoutes)


// Connect to Mongoose
const connectionString = process.env.DB_URI;
mongoose.connect(connectionString)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    })
})
.catch(error => {
    console.log(error)
})
