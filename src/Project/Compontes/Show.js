import { useParams } from "react-router-dom";

export function Show(params) {
    const { id } = useParams();
  return (
    <div style={{ margin: "200px" }}>
      <h1> this is show page  {id} </h1>
    </div>
  );
}
