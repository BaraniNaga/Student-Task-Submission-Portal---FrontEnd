import Login from "./login";

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return ( 
      RecordList
   );
}

export default result;