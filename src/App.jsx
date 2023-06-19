import Layout from './Components/Layout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import './assets/css/App.css'
import Quiz from './Pages/Quiz';
import Result from './Pages/Result.jsx';
function App() {
  return (
    <>
      <Layout>
        {/* <Home/> */}
        {/* <Signup/> */}
        {/* <Login/> */}
        {/* <Quiz/> */}
        <Result/>
      </Layout>
    </>
  );
}

export default App;
