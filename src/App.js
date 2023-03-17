import "./App.css";
import { isError, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


function App() {
  //const queryClient = useQueryClient();
  // const queryInfo =  useQuery(['pokemon'] , () => {
  //   axios.get('https://pokeapi.co/api/v2/pokemon').then(res => res.data.results)
  // })

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => res.data),
    //refetchOnWindowFocus: false,
  });

  //if (isLoading) return <h1>Loading</h1>

  return (
    <div className="App">
      <h1>Hello React Query</h1>
      {data?.results?.length &&
        data.results.map((item, idx) => {
          return <h4 key={idx}>{item?.name}</h4>;
        })}
    </div>
  );
}

export default App;
