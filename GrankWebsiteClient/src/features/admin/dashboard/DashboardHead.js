import React from "react";
const DashboardHead = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-4">
                  <div className=" dashboard-div">
                    <h1>25%</h1>
                    <h2>Enquire</h2>
                  </div>
                </div>
                <div className="col-4">
                  <div className=" dashboard2-div">
                    <h1>25%</h1>
                    <h2>Admissions !</h2>
                  </div>
                </div>
                <div className="col-4">
                  <div className=" dashboard1-div">
                    <h1>25%</h1>
                    <h2>Registrations !</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4">
                  <div className=" dashboard-div">
                    <h1>25%</h1>
                    <h2>Total Signup</h2>
                  </div>
                </div>
                <div className="col-4 ">
                  <div className=" dashboard2-div">
                    <h1>51</h1>
                    <h2>Total Admin !</h2>
                  </div>
                </div>
                <div className="col-4">
                  <div className=" dashboard1-div">
                    <h1>25%</h1>
                    <h2>Total Payment</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardHead;
