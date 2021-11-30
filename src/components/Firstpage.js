import React from "react";
import { useState } from "react";

export const Firstpage = ({
  gotoPaytm,
  setUserRegistration,
  userRegistration,
}) => {


  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userRegistration };
    console.log(records);

    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({ username: "", upid: "", amount: "", refNo: ""});
  };

  return (
    <div>
      <div>
        Enter the Name :
        <input
          type="text"
          autoComplete="off"
          value={userRegistration.username}
          name="username"
          id="username"
          onChange={handleInput}
        ></input>
      </div>
      <div>
        Enter 10 digits UPI :
        <input
          type="text"
          autoComplete="off"
          value={userRegistration.upi}
          name="upid"
          id="upid"
          onChange={handleInput}
        ></input>
      </div>
      <div>
        Enter the amount :
        <input
          type="text"
          autoComplete="off"
          value={userRegistration.amount}
          name="amount"
          id="amount"
          onChange={handleInput}
        ></input>
      </div>
      <div>
        Enter the first 4 digits of reference no:
        <input
          type="text"
          autoComplete="off"
          value={userRegistration.refNo}
          name="refNo"
          id="refNo"
          onChange={handleInput}
        ></input>
      </div>
      <button onClick={gotoPaytm}>Submit</button>
    </div>
  );
};
