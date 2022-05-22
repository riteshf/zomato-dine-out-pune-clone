import React, { Fragment } from "react";
import Breadcrum from "./Breadcrum/Breadcrum";

let options = ["Home", "India", "Pune"];
const Breadcrums = () => {
  return (
    <div data-cy="breadcrums">
      {options.map((option, index) => (
        <Fragment key={index}>
          <Breadcrum value={option} />
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrums;
