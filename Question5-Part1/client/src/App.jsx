import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Protected from "./Components/Protected";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => {
    setLoggedIn(true);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} index />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login logUser={logIn} />} />
        <Route path="dashboard" element={
          <Protected isLoggedIn={loggedIn}>
            <Dashboard username={localStorage.getItem('user')} />
          </Protected>
        } />
      </Routes>
    </div>
  );
}

export default App;
