import './App.css';
import useJsonFetch from "./hooks/useJsonFetch";

function ErrorComponent() {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/error');
  return (
  {data.status}
  )
}

function App() {

  return (
    <>
      <ErrorComponent />
    </>
  );
}

export default App;
