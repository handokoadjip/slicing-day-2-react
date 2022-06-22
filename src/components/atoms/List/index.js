import React from "react";

const index = (props) => {
  return (
    <div className="col-lg-5">
      <div className="wrapper">
        <div className="pe-0 pe-lg-5">
          <h2 className="fs-2 text-border-top fw-bold mb-5">
            {props.title}
          </h2>
          {props.lists ? (
            props.lists.map((list, index) => {
              return (
                <p className="fs-5 list-text" key={`text-${index}`}>
                  {list}
                </p>
              );
            })
          ) : (
            <p>No List in this section</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
