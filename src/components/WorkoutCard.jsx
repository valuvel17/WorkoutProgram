import { useState } from "react";
import Modal from "./Modal.jsx";
import WorkoutCardHeader from "./WorkoutCardHeader.jsx";
import ExerciseGrid from "./ExerciseGrid.jsx";


export default function WorkoutCard({
  trainingPlan,
  workoutIndex,
  type,
  dayNum,
  icon,
  savedWeights,
  HandleSave,
  HandleComplete,
}) {
  const { warmup, workout } = trainingPlan || {};
  const [showExerciseDescription, setShowExerciseDescription] = useState(null);
  const [weights, setWeights] = useState(savedWeights || {});

  function HandleAddWeight(title, weight) {
    setWeights({ ...weights, [title]: weight });
  }

  return (
    <div className="workout-container">
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => setShowExerciseDescription(null)}
        />
      )}

      <div className="workout-card card">
        <WorkoutCardHeader dayNum={dayNum} icon={icon} type={type} />
      </div>

      <ExerciseGrid
        title="Warmup"
        list={warmup}
        isWarmup={true}
        weights={weights}
        onHelpClick={setShowExerciseDescription}
      />

      <ExerciseGrid
        title="Workout"
        list={workout}
        isWarmup={false}
        weights={weights}
        onWeightChange={HandleAddWeight}
        onHelpClick={setShowExerciseDescription}
      />

      <div className="workout-buttons">
        <button onClick={() => HandleSave(workoutIndex, { weights })}>
          Save & Exit
        </button>
        <button
          onClick={() => HandleComplete(workoutIndex, { weights })}
          disabled={Object.keys(weights).length !== workout.length}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
