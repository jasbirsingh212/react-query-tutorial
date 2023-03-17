import "./App.css";
import { isError, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


function App() {
  //const queryClient = useQueryClient();
  // const queryInfo =  useQuery(['pokemon'] , () => {
  //   axios.get('https://pokeapi.co/api/v2/pokemon').then(res => res.data.results)
  // })

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"], //if we fetch data with same fetch key data will 
    //only be fetched once
    queryFn: () =>
      axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => res.data),
    //refetchOnWindowFocus: false, default true
    //staleTime:10000, in milli sec default 0
    //cacheTime: 1000, in milli sec default 5 min
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
