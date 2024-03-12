import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";

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
              <div>
                <WorkoutDetails workout={workout} key={workout._id}/>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
