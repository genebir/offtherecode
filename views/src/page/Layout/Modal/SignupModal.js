import React from "react";
import "./SignupModal.css";

const SignupModal = React.memo((props) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>Signup Complete</h2>
        <p>회원가입에 성공했습니다</p>
        <div className="error-modal__actions" onClick={props.onClose}>
          <button type="button" onClick={props.signin}>
            로그인 하기
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default SignupModal;
