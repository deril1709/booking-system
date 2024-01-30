import './App.css'
import { UserContextProvider } from './UserContext'
import Router from './utils/router'

function App() {

  // const [user, setUser] = useState(null);
  // const [ready, setReady] = useState(false);
  // const [hasmutate, setHasmutate] = useState(false)
  // useEffect(() => {
  //   if (!user && getTokenFromLocalStorage()) {
  //     axios.get('/api/users', {
  //       headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
  //     }).then(data => {
  //       setUser(data.data.data);
  //       console.log(data.data.data);
  //       setReady(true);
  //     }).catch(e => {
  //       setReady(false)
  //     });
  //   }
  // }, [])
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user && user.role === 'ADMIN') {
  //     navigate('/admin');
  //   } else if (user) {
  //     navigate('/');
  //   }
  // }, [user, navigate]);

  return (

    <UserContextProvider>
      <Router />
    </UserContextProvider>
  )
}

export default App