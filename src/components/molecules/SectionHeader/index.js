import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="px-4">
      <div className="container-fluid">
        <div className="row min-vh-70 pt-5">
          <div className="col-lg-9">
            <div className="wrapper d-flex align-items-end h-100">
              <div className="w-100">
                <h1 className="fw-normal fs-2 mp-0 text-border-top">
                  We help architects, interior designer and building answer to
                  transform, renovate and create amazing spaces, Simpla.
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="wrapper d-flex align-items-end justify-content-end h-100">
              <Link to="#">
                <i className="fas fa-arrow-down fs-2 text-end text-fade-black-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
