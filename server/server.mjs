import express from "express"
import morgan from "morgan"
import dotEnv from "dotenv"
dotEnv.config()
const app = express()
const PORT = process.env.PORT
import workoutRoutes from "./routes/workouts.mjs"

app.use(morgan("dev"))
app.use("/api/workouts", workoutRoutes)

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
