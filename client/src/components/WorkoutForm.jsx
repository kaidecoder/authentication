import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const res = await fetch("http://localhost:3000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      },
    });
    const json = await res.json()

    if(!res.ok){
        setError(json.error)
    }
    if(res.ok){
        setError(null)
        setTitle("")
        setLoad("")
        setReps("")
        console.log("new workout added")
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Load (kg):</label>
      <input
        type="Number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Reps:</label>
      <input
        type="Number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add workout</button>
    </form>
  );
};

export default WorkoutForm;
