export default function WorkoutCardHeader({ dayNum, icon, type }) {
  return (
    <>
      <div className="plan-card-header">
        <p>Day {dayNum}</p>
        {icon}
      </div>
      <div className="plan-card-header">
        <h2>
          <b>{type} Workout</b>
        </h2>
      </div>
    </>
  );
}
