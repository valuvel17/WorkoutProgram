import ExerciseRow from "./ExerciseRow.jsx";
import { exerciseDescriptions } from "../utils/index.js";

export default function ExerciseGrid({
  title,
  list,
  isWarmup,
  weights,
  onWeightChange,
  onHelpClick
}) {
  return (
    <div className="workout-grid">
      <div className="exercise-name">
        <h4>{title}</h4>
      </div>
      <h6>Sets</h6>
      <h6>Reps</h6>
      <h6 className="weight-input">Max Weight</h6>
      {list.map((exercise, i) => (
        <ExerciseRow
          key={i}
          index={i}
          exercise={{ ...exercise, description: exerciseDescriptions[exercise.name] }}
          isWarmup={isWarmup}
          weight={weights?.[exercise.name]}
          onWeightChange={onWeightChange}
          onHelpClick={onHelpClick}
        />
      ))}
    </div>
  );
}
