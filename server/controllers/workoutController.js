import Workout from "../models/workout.mjs";
import mongoose from "mongoose"

//GET all workouts
export const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//GET a single workout
export const getWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Does not exist"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({err: "Does not exist"})
    }

    res.status(200).json(workout)
}

//POST a new workout
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a single workout
export const deleteWorkout = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Does not exist"})
    }

  const workout = await Workout.findByIdAndDelete(id)
    if(!workout){
        return res.status(400).json({error: "No such workout"})
    }
    res.status(200).json(workout)

}

//PATCH a single workout
export const updateWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Does not exist"})
        }
        const workout = await Workout.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        if (!workout) {
          return res.status(400).json({ error: "workout not found" });
        }
        res.status(200).json(workout)
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to update workout" });
      }
}
