import React from "react";
import { Auth } from "../components/templates";
import { SigninView } from "../components";

const Signin = (props) => {
  
  return (
    <Auth title="Signin">
      <SigninView {...props} />
    </Auth>
  );
};

export default Signin;
