import { List } from "components/atoms";
import React from "react";

const index = () => {
  const lists = [
    "Interior finishing",
    "Glass finishing",
    "Lighting",
    "Financial audit",
    "Design & application",
  ];

  return (
    <section className="px-4 my-5 py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 mb-5 pb-5 mb-lg-0 pb-lg-0">
            <div className="wrapper">
              <div className="pe-0 pe-lg-5">
                <h2 className="fw-normal fs-2 text-border-top fw-bold mb-5">
                  Renovation made Simpla
                </h2>
                <p className="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  facere delectus provident sit quod quos expedita suscipit
                  magni debitis ipsam.
                </p>
                <p className="fs-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                  dignissimos vitae ipsa quod. Eius accusamus corrupti quos
                  ducimus id, molestiae minima ut quia cum, commodi voluptatum
                  hic quae perferendis modi ipsam omnis sed distinctio atque
                  unde facere voluptatibus excepturi adipisci.
                </p>
              </div>
            </div>
          </div>
          <List title="Areas of expertise" lists={lists} />
        </div>
      </div>
    </section>
  );
};

export default index;
