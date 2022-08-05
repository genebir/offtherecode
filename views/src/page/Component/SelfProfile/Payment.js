const Payment = (props) => {
  return (
    <div>
      <div
        className={
          props.state === 7
            ? "product-feed-tab animated fadeIn current"
            : "product-feed-tab animated fadeIn"
        }
        id="payment-dd"
      >
        <div className="billing-method">
          <ul>
            <li>
              <h3>Add Billing Method</h3>
              <a href="#" title="">
                <i className="fa fa-plus-circle" />
              </a>
            </li>
            <li>
              <h3>See Activity</h3>
              <a href="#" title="">
                View All
              </a>
            </li>
            <li>
              <h3>Total Money</h3>
              <span>$0.00</span>
            </li>
          </ul>
          <div className="lt-sec">
            <img src="images/lt-icon.png" alt="" />
            <h4>All your transactions are saved here</h4>
            <a href="#" title="">
              Click Here
            </a>
          </div>
        </div>
        {/*billing-method end*/}
        <div className="add-billing-method">
          <h3>Add Billing Method</h3>
          <h4>
            <img src="images/dlr-icon.png" alt="" />
            <span>
              With workwise payment protection , only pay for work delivered.
            </span>
          </h4>
          <div className="payment_methods">
            <h4>Credit or Debit Cards</h4>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="cc-head">
                    <h5>Card Number</h5>
                    <ul>
                      <li>
                        <img src="images/cc-icon1.png" alt="" />
                      </li>
                      <li>
                        <img src="images/cc-icon2.png" alt="" />
                      </li>
                      <li>
                        <img src="images/cc-icon3.png" alt="" />
                      </li>
                      <li>
                        <img src="images/cc-icon4.png" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="inpt-field pd-moree">
                    <input type="text" name="cc-number" placeholder="" />
                    <i className="fa fa-credit-card" />
                  </div>
                  {/*inpt-field end*/}
                </div>
                <div className="col-lg-6">
                  <div className="cc-head">
                    <h5>First Name</h5>
                  </div>
                  <div className="inpt-field">
                    <input type="text" name="f-name" placeholder="" />
                  </div>
                  {/*inpt-field end*/}
                </div>
                <div className="col-lg-6">
                  <div className="cc-head">
                    <h5>Last Name</h5>
                  </div>
                  <div className="inpt-field">
                    <input type="text" name="l-name" placeholder="" />
                  </div>
                  {/*inpt-field end*/}
                </div>
                <div className="col-lg-6">
                  <div className="cc-head">
                    <h5>Expiresons</h5>
                  </div>
                  <div className="rowwy">
                    <div className="row">
                      <div className="col-lg-6 pd-left-none no-pd">
                        <div className="inpt-field">
                          <input type="text" name="f-name" placeholder="" />
                        </div>
                        {/*inpt-field end*/}
                      </div>
                      <div className="col-lg-6 pd-right-none no-pd">
                        <div className="inpt-field">
                          <input type="text" name="f-name" placeholder="" />
                        </div>
                        {/*inpt-field end*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cc-head">
                    <h5>
                      Cvv (Security Code){" "}
                      <i className="fa fa-question-circle" />
                    </h5>
                  </div>
                  <div className="inpt-field">
                    <input type="text" name="l-name" placeholder="" />
                  </div>
                  {/*inpt-field end*/}
                </div>
                <div className="col-lg-12">
                  <button type="submit">Continue</button>
                </div>
              </div>
            </form>
            <h4>Add Paypal Account</h4>
          </div>
        </div>
        {/*add-billing-method end*/}
      </div>
      {/*product-feed-tab end*/}
    </div>
  );
};

export default Payment;
