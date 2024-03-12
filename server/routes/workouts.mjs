import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    console.log(req.query.msg)
    res.json({msg: "Get all workouts"})
})
router.post("/:id", (req, res) => {
    console.log(req.body)
    res.json({msg: "Create a workout"})
})
router.get("/:id", (req, res) => {
    const {id}= req.params
    console.log(id)
    res.json({msg: "Get one workout"})
})
router.delete("/:id", (req, res) => {
    res.json({msg: "Delete a workout"})
})
router.patch("/:id", (req, res) => {
    res.json({msg: "Edit a workout"})
})



export default router
