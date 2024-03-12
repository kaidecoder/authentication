import React, { useState, useEffect } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import axios from "axios";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      await axios
        .get("http://localhost:3000/api/workouts")
        .then((data) => setWorkouts(data.data));
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return (
              <div key={workout._id}>
                <WorkoutDetail workout={workout} />
              </div>
            );
          })}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
