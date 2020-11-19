import React from "react";
import FourOFour from "@ui/assets/static/images/404.png";
import {Error} from "../components/templates";

const Notfound = () => {
  const errorObject = {
    image: FourOFour,
    code: 404,
    info: "Oops Page Not Found",
    description:
      "The page you are looking for does not exist or has been moved.",
  };
  return <Error err={errorObject} />;
};

export default Notfound;
