import React from "react";
import { Auth } from "../components/templates";
import { SignupView } from "../components";

const Signup = (props) => {
  
  return (
    <Auth title="Signup">
      <SignupView {...props} />
    </Auth>
  );
};

export default Signup;
