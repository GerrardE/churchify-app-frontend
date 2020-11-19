import React from "react";
import Fivehundred from "@ui/assets/static/images/500.png";
import { Error } from "../components/templates";

const ServerError = () => {
  let errorObject = {
    image: Fivehundred,
    code: "500",
    info: "Internal Server Error",
    description: "Something happened to our servers, please try again later.",
  };
  return <Error err={errorObject} />;
};

export default ServerError;
