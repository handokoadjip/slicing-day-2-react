import { List } from "components/atoms";
import React from "react";

const index = () => {
  const lists = [
    "Easy and fast",
    "Noise free",
    "Dust free",
    "Lorem",
    "Flexible",
    "dolor sit amet",
    "Lightweight & thin",
    "Fast repair & reposition",
  ];

  return (
    <section className="px-4 my-5 py-5 bg-color-gray">
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-lg-7 mb-5 pb-5 mb-lg-0 pb-lg-0">
            <div className="wrapper">
              <div className="pe-0 pe-lg-5">
                <h2 className="fs-2 text-border-top fw-bold mb-5">
                  Turn-key solutions
                </h2>
                <p className="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  facere delectus provident sit quod quos expedita suscipit
                  magni debitis ipsam.
                </p>
                <p className="fs-5 mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                  dignissimos vitae ipsa quod. Eius accusamus corrupti quos
                  ducimus id, molestiae minima ut quia cum, commodi voluptatum
                  hic quae perferendis modi ipsam omnis sed distinctio atque
                  unde facere voluptatibus excepturi adipisci.
                </p>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus eveniet, ad voluptates vero tempore facilis eos harum
                  dolorem quae aliquam fugit saepe labore placeat cum accusamus.
                  Repudiandae odit qui recusandae enim quam, voluptate, porro
                  quod optio ratione animi fugiat, cumque mollitia autem neque
                  dicta. Voluptatum commodi officiis temporibus? Natus,
                  possimus?
                </p>
              </div>
            </div>
          </div>
          <List title="Installation" lists={lists} />
        </div>
      </div>
    </section>
  );
};

export default index;
