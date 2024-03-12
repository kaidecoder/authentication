import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({msg: "Get all workouts"})
})
router.post("/:id", (req, res) => {
    res.json({msg: "Create a workout"})
})
router.get("/:id", (req, res) => {
    res.json({msg: "Get one workout"})
})
router.delete("/:id", (req, res) => {
    res.json({msg: "Delete a workout"})
})
router.patch("/:id", (req, res) => {
    res.json({msg: "Patch a workout"})
})



export default router
