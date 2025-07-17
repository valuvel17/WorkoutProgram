export default function Layout(props) {
  const { children } = props;

  const header = (
    <header>
      <h1 className="text-gradient">The Program</h1>
      <p>
        <strong>30 simple Workouts Program</strong>
      </p>
    </header>
  );

  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a href="/" target="_blank">
          Valentina Velázquez
        </a>{" ⭐ the repo on "}
        <a target="_blank" href="https://github.com/valuvel17/WorkoutProgram"
          >Github</a>
      </p>
    </footer>
  );

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
