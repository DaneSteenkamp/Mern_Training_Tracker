import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import UserContext from "../../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../app/Navbar";

export default function Home() {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, []);

  return (
    <div className="home">
      <Navbar />
    </div>
  );
}
