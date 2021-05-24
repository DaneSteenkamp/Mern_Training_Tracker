import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "./components/pages/home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import UserContext from "./context/UserContext";
import Axios from "axios";

import ExercisesList from "./components/app/ExercisesList";
import EditExercise from "./components/app/EditExercise";
import CreateExercise from "./components/app/CreateExersise";

import "./styles.css";
import CreateProfile from "./components/app/CreateProfile";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/log" exact component={ExercisesList} />
              <Route path="/edit/:id" component={EditExercise} />
              <Route path="/create" component={CreateExercise} />
              <Route path="/profile" component={CreateProfile} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
