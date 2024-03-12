import express from "express"
import Workout from "../models/workout.mjs"

const router = express.Router()

router.get("/", (req, res) => {
    console.log(req.query.msg)
    res.json({msg: "Get all workouts"})
})
router.post("/:id", async (req, res) => {
    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({
            title, load, reps
        })
        res.status(201).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
router.get("/:id", (req, res) => {
    const {id}= req.params
    console.log(id)
    console.log(req.params.id)
    res.json({msg: "Get one workout"})
})
router.delete("/:id", (req, res) => {
    res.json({msg: "Delete a workout"})
})
router.patch("/:id", (req, res) => {
    res.json({msg: "Edit a workout"})
})



export default router
