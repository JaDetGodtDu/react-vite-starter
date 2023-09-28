import reactLogo from "./assets/react.svg";

function App() {
  const [members, setMembers] = useState([
    { firstName: "Peter", lastName: "Lind" },
  ]);

  return (
    <>
      <header>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>RACE Your React 🎉</h1>
      </header>
      {members.map((member) => (
        <Member member={member} key={member.id} />
      ))}
    </>
  );
}

function Member({ member }) {
  return (
    <article>
      <h2>
        {member.firstName} {member.lastName}
      </h2>
    </article>
  );
}

export default App;
