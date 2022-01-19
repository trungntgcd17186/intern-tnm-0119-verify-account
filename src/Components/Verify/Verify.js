import React from "react";
import "./style.css";

function Verify(props) {
  const handleFocus = (e) => {
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  const handleOnKeyDown = (e) => {
    if (e.target) {
      e.target.value = "";
    }
  };
  return (
    <div className="main">
      <div>
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to trungnt1311997@gmail.com
          <br />
          Enter the code below to confirm your email address.
        </p>
      </div>
      <div className="verify-container">
        <input
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
          autoFocus={true}
        ></input>
        <input
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
        <input
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
        <input
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
        <input
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
        <input
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
      </div>
      <div>
        <small class="infomation">
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </small>
      </div>
    </div>
  );
}

export default Verify;
