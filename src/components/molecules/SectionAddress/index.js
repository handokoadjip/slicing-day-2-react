import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="px-4 my-5 py-5">
      <div className="container-fluid">
        <div className="row justify-content-between pt-5">
          <div className="col-lg-5">
            <div className="wrapper">
              <div className="pe-0 pe-lg-5">
                <h2 className="fw-normal fs-2 text-border-top fw-bold mb-5">
                  Simpla SA
                </h2>
                <div className="address mb-5">
                  <p className="fs-5 mb-0">Akshya Nagar</p>
                  <p className="fs-5 mb-0">1st Block 1st Cross</p>
                  <p className="fs-5 mb-0">Rammurthy nagar, Bangalore-560016</p>
                </div>
                <div className="contact">
                  <p className="fs-6 mb-0 text-fade-black-1">
                    test@example.com
                  </p>
                  <p className="fs-5">+62 896 5057 4913</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="wrapper d-flex align-items-end justify-content-end h-100">
              <Link to="#">
                <i className="fas fa-arrow-up fs-2 text-end text-fade-black-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
