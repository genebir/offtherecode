import React from "react";
import "./SignupModal.css";

const PassWordChangeErrorModal = React.memo((props) => {
  return (
    <React.Fragment>
      <div className="backdrop" />
      <div className="error-modal">
        <h2>Error Occurred</h2>
        <p>비밀번호가 일치하지 않습니다</p>
        <div className="error-modal__actions" onClick={props.closeErrorHandler}>
          <button
            type="button"
            onClick={props.closeErrorHandler}
            style={{
              font: "inherit",
              cursor: "pointer",
              padding: "0.5rem 1.5rem",
              border: "1px solid #40005d",
              backgroundColor: "#40005d",
              color: "white",
              borderRadius: "12px",
              marginRight: "0.5rem",
              marginBottom: "0.3rem",
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default PassWordChangeErrorModal;
