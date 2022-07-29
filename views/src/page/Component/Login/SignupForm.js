import { useRef, useState } from "react";
import ErrorModal from "../../Layout/ErrorModal";
import SignupModal from "../../Layout/Modal/SignupModal";

const SignupForm = (props) => {
  const [checkbox, setCheckbox] = useState(true);
  const [error, setError] = useState(false);
  const [ValidSignup, setValidSignup] = useState(false);

  let inputEmail = useRef();
  let inputPassword = useRef();
  let inputPasswordCheck = useRef();
  let inputNickname = useRef();
  let inputPhoneNumber = useRef();

  const checkboxHandler = () => {
    // 체크박스 토글기능
    if (checkbox === true) {
      setCheckbox(false);
      console.log(checkbox);
    } else {
      setCheckbox(true);
      console.log(checkbox);
    }
    return setCheckbox;
  };

  const addSignupHandler = (SignupJsonData) => {
    //데이터 전송 함수
    try {
      fetch("http://localhost:8888/otc/signup", {
        // localhost:3000/
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignupJsonData),
      })
        .then((response) => console.log(response.json()))
        .then((data) => console.log(data));
    } catch {
      setError(true);
    }
  };

  const onSubmitHandler = (event) => {
    //가입 눌렀을때 작용하는 함수
    event.preventDefault();

    const enterEmail = inputEmail.current.value.toString();
    const enterPassword = inputPassword.current.value;
    const enterPasswordCheck = inputPasswordCheck.current.value.toString();
    const enterNickname = inputNickname.current.value.toString();
    const enterPhoneNumber = inputPhoneNumber.current.value.toString();

    const SignupJsonData = {
      userEmail: enterEmail,
      userPassword: enterPassword,
      userNick: enterNickname,
      userPhone: enterPhoneNumber,
    };

    // console.log(SignupJsonData);

    if (checkbox === false) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    if (
      enterPassword === enterPasswordCheck &&
      (enterEmail !== "" ||
        enterPassword !== "" ||
        enterNickname !== "" ||
        enterPhoneNumber !== "")
    ) {
      setError(false);
      try {
        addSignupHandler(SignupJsonData);
        setValidSignup(true);
      } catch (err) {
        setError(true);
        return;
      }
    } else {
      setError(true);
    }
  };
  // 이메일 비밀번호 닉네임 핸드폰 번호
  return (
    <div>
      <div
        className={
          props.state === 2
            ? "sign_in_sec animated fadeIn current"
            : "sign_in_sec animated fadeIn"
        }
        id="tab-2"
      >
        {/*signup-tab end*/}
        <div className="dff-tab current" id="tab-3">
          <form onSubmit={onSubmitHandler}>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={inputEmail}
                  />
                  <i className="la la-user" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="nickname"
                    placeholder="Nickname"
                    ref={inputNickname}
                  />
                  <i className="la la-globe" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    ref={inputPhoneNumber}
                    maxLength="13"
                  />
                  <i className="la la-globe" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={inputPassword}
                  />
                  <i className="la la-lock" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="repeat-password"
                    placeholder="Repeat Password"
                    ref={inputPasswordCheck}
                  />
                  <i className="la la-lock" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="checky-sec st2">
                  <div className="fgt-sec">
                    <input
                      type="checkbox"
                      name="cc"
                      id="c2"
                      checked={checkbox ? true : false}
                      onChange={checkboxHandler}
                    />
                    <label htmlFor="c2">
                      <span />
                    </label>
                    <small>
                      Yes, I understand and agree to the workwise Terms &amp;
                      Conditions.
                    </small>
                  </div>
                  {/*fgt-sec end*/}
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <button type="submit" value="submit">
                  Get Started
                </button>
                {error ? <ErrorModal onClose={() => setError(false)} /> : null}
                {ValidSignup && (
                  <SignupModal
                    signin={props.signin}
                    onClose={() => setValidSignup(false)}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
        {/*dff-tab end*/}
      </div>
    </div>
  );
};

export default SignupForm;
