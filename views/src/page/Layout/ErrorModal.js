import React from "react";

import "./ErrorModal.css";

const ErrorModal = React.memo((props) => {
  return (
    <React.Fragment>
      <div className="backdrop" />
      <div className="error-modal">
        <h2>An Error Occurred!</h2>
        <p>입력이 잘못 되었습니다</p>
        <div
          className="error-modal__actions"
          style={{ marginBottom: "0.5rem" }}
        >
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;
