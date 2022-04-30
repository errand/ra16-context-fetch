import './App.css';
import WithJsonFetch from "./components/WithJsonFetch";

function App() {

  return (
    <>
      <WithJsonFetch url="http://localhost:7070/data" />
      <WithJsonFetch url="http://localhost:7070/error" />
      <WithJsonFetch url="http://localhost:7070/loading" />
    </>
  );
}

export default App;
