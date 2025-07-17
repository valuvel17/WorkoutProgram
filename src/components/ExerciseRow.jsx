export default function ExerciseRow({
  index,
  exercise,
  isWarmup,
  weight,
  onWeightChange,
  onHelpClick
}) {
  return (
    <>
      <div className="exercise-name">
        <p>
          {index + 1}, {exercise.name}
        </p>
        <button
          onClick={() =>
            onHelpClick({
              name: exercise.name,
              description: exercise.description
            })
          }
          className="help-icon"
        >
          <i className="fa-regular fa-circle-question" />
        </button>
      </div>
      <p className="exercise-info">{exercise.sets}</p>
      <p className="exercise-info">{exercise.reps}</p>
      {isWarmup ? (
        <input disabled className="weight-input" placeholder="N/A" />
      ) : (
        <input
          value={weight || ""}
          onChange={(e) => onWeightChange(exercise.name, e.target.value)}
          className="weight-input"
          placeholder="14"
        />
      )}
    </>
  );
}
