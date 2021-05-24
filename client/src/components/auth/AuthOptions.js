import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
//import userContext from "../../context/UserContext";
import UserContext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", " ");
    window.location = "/login";
  };

  return (
    <nav className="auth-op">
      {userData.user ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <>
          <button onClick={register} className="regBTN">
            Register
          </button>
          <button onClick={login} className="logBTN">
            Login
          </button>
        </>
      )}
    </nav>
  );
}
