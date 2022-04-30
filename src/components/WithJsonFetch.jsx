import useJsonFetch from "../hooks/useJsonFetch";

export default function WithJsonFetch(props) {
  const [data, error, isLoading] = useJsonFetch(props.url);

  return (
    <div className="component">
      <div className="component-ok">{data.status}</div>
      {isLoading && <div className="component-load">Загрузка...</div>}
      {error && <div className="component-error">{error.toString()}</div>}
    </div>
  );
}
