import "./App.css";
import { Paytm } from "./components/Paytm";
import { Firstpage } from "./components/Firstpage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
<script
  src="https://kit.fontawesome.com/fdbd25f3f6.js"
  crossorigin="anonymous"
></script>;

function App() {
  const [active, setActive] = useState("home");

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    upi: "",
    amount: "",
  });

  return (
    <div>
      {active === "home" && (
        <Firstpage
          userRegistration={userRegistration}
          gotoPaytm={() => setActive("paytm")}
          setUserRegistration={setUserRegistration}
        />
      )}
      {active === "paytm" && (
        <Paytm
          gotoHome={() => setActive("home")}
          amount={userRegistration.amount}
          upi={userRegistration.upi}
          username={userRegistration.username}
        />
      )}
    </div>
  );
}

export default App;
