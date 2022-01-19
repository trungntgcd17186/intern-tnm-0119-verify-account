import React from "react";
import "./style.css";

function Verify(props) {
  const handleFocus = (e) => {
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  const handleOnKeyDown = (e) => {
    //Reset giá trị trước khi nhấn nút nếu nó đang được người dùng target để thay đổi giá trị cho input.
    if (e.target && e.keyCode >= 48 && e.keyCode <= 57) {
      e.target.value = "";
    }

    //Lắng nghe sự kiện người dùng nhấn nút backspace và delete để gán giá trị.
    if (e.keyCode === 8 || e.keyCode === 46) {
      e.target.value = "";
    }

    //Lắng nghe sự kiện người dùng nhấn nút backspace và delete để lùi input.
    if (e.keyCode === 8 || e.keyCode === 46) {
      e.target.previousSibling.focus();
    }
  };

  //Ngăn sự kiện nút backspace, nút phẩy, nút chấm, nút chấm hỏi/xuyệt gây lỗi.
  window.onkeydown = function (event) {
    if (
      (event.which === 8 && event.which !== 0 && event.which < 48) ||
      event.which > 57
    ) {
      event.preventDefault();
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
          type="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
          autoFocus={true}
        ></input>
        <input
          type="number"
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
        <input
          type="number"
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
        <input
          type="number"
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
        <input
          type="number"
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
        <input
          type="number"
          className="number"
          maxLength={1}
          placeholder="0"
          onKeyDown={handleOnKeyDown}
          onChange={handleFocus}
        ></input>
      </div>
      <div>
        <small class="information">
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </small>
      </div>
    </div>
  );
}

export default Verify;
