import "./App.css";
import { Paytm } from "./components/Paytm";
import { Firstpage } from "./components/Firstpage";
import { useState } from "react";
import useSound from "use-sound";
import sound from "./assets/sounds/paytm.mp3";
<script
  src="https://kit.fontawesome.com/fdbd25f3f6.js"
  crossorigin="anonymous"
></script>;

function App() {
  const currTime = new Date().toLocaleTimeString([], { timeStyle: "short" });
  const currDate = new Date().getDate();
  const currMonth = new Date().toLocaleString("en-us", { month: "short" });
  const [play] = useSound(sound);

  const [active, setActive] = useState("home");

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    upid: "",
    amount: "",
    refNo:"",
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
          refNo={userRegistration.refNo}
          currTime={currTime}
          currDate={currDate}
          currMonth={currMonth}
          playSound={play()}
        />
      )}
    </div>
  );
}

export default App;
