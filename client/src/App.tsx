import { useQuery } from "@apollo/client";
import { helloQuery } from "./graphql/query/query.js";

const App = () => {
  type HelloType = {
    hello: string;
  };
  const { data, loading, error } = useQuery<HelloType>(helloQuery);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h2>{error.message}</h2>;
  console.log(data);

  return (
    <div>
      <h1>GraphQL Data</h1>
      {data?.hello}
    </div>
  );
};

export default App;
