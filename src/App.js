import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Unsubscribe from "./pages/Unscubscribe.js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Afterlogin from "./pages/Afterlogin";
import Profile from "./component/Profile.js";

function App() {
  
  const checkAuthentication = () => {
    return false;
  };
  const authenticated = checkAuthentication();
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Home"
          element={authenticated ? <Home /> : <Afterlogin />}
        />
        <Route path="/Unsubscribe" element={<Unsubscribe />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Afterlogin" element={<Afterlogin />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
