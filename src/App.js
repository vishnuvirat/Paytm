import "./App.css";
import { Paytm } from "./components/Paytm";
import { Firstpage } from "./components/Firstpage";
import { useState } from "react";
import useSound from "use-sound";
<script
  src="https://kit.fontawesome.com/fdbd25f3f6.js"
  crossorigin="anonymous"
></script>;

function App() {
  

  const [active, setActive] = useState("home");

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    upid: "",
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
          upid={userRegistration.upid}
          username={userRegistration.username}
        />
      )}
    </div>
  );
}

export default App;
