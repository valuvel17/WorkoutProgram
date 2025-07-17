import { useState, useEffect } from "react";
import { FormatDay, GetWorkoutType, GetIconClass } from "../utils/helpers.js";
import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard.jsx";

export default function Grid() {
  const [savedWorkouts, setSavedWorkouts] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const completedWorkouts = Object.keys(savedWorkouts || {}).filter((val) => {
    const entry = savedWorkouts[val];
    return entry.isCompleted;
  });

  function HandleSave(index, data) {
    const newObj = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isCompleted:
          !!data.isCompleted || !!savedWorkouts?.[index]?.isCompleted,
      },
    };
    setSavedWorkouts(newObj);
    localStorage.setItem("TheProgram", JSON.stringify(newObj));
    setSelectedWorkout(null);
  }

  function HandleComplete(index, data) {
    const newObj = { ...data };
    newObj.isCompleted = true;
    HandleSave(index, newObj);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let savedData = {};
    if (localStorage.getItem("TheProgram")) {
      savedData = JSON.parse(localStorage.getItem("TheProgram"));
    }
    setSavedWorkouts(savedData);
  }, []);

  return (
    <div className="training-plan-grid">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        const isLocked =
          workout == 0
            ? false
            : !completedWorkouts.includes(String(workoutIndex - 1));
        const type = GetWorkoutType(workoutIndex);
        const trainingPlan = training_plan[workoutIndex];
        const dayNum = FormatDay(workoutIndex);
        const icon = <i className={GetIconClass(workoutIndex, isLocked)}></i>;
        if (workoutIndex == selectedWorkout) {
          return (
            <WorkoutCard
              key={workoutIndex}
              trainingPlan={trainingPlan}
              type={type}
              workoutIndex={workoutIndex}
              dayNum={dayNum}
              icon={icon}
              HandleSave={HandleSave}
              HandleComplete={HandleComplete}
              savedWeights={savedWorkouts?.[workoutIndex]?.weights}
            />
          );
        }
        return (
          <button
            onClick={() => { if(isLocked) { return}
              setSelectedWorkout(workoutIndex);
            }}
            className={"card plan-card " + (isLocked ? "inactive" : "")}
            key={workoutIndex}
          >
            <div className="plan-card-header">
              <p>Day {dayNum}</p>
              {icon}
            </div>
            <div className="plan-card-header">
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}
