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
        <a href="" target="_blank">
          Valentina Velázquez
        </a>{" "}
        <br />
        Styled with FantaCSS
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
