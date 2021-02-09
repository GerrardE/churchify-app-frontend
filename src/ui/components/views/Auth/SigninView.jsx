import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { signin } from "@domain/redux/signin/signin.thunks";
import { Label, Inputfield, Button, ErrorMessage } from "../../atoms";
import { emailSchema, passwordSchema } from "../_validations/schema";
import AppLoader from "../../molecules/AppLoader";

const SigninView = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const { email, password } = errors;
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.signin.loading);

  const onSubmit = (data) => {
    dispatch(signin(data, history));
  };

  // const handleGoogleSignin = () => {dispatch(signinWithGoogle(history));};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="needs-validation mt-10"
      noValidate
    >
      <div className="form-group">
        <Label labelClassName="text-normal text-dark">Email</Label>
        <Inputfield
          inputType="email"
          inputClassName={classnames("form-control", {
            "is-invalid": email,
          })}
          inputId="useremail"
          inputPlaceholder="user@email.com"
          inputName="email"
          inputRef={register(emailSchema)}
        />
        <ErrorMessage message={email?.message} />
      </div>
      <div className="form-group">
        <Label labelClassName="text-normal text-dark">Password</Label>
        <Inputfield
          inputType="password"
          inputId="userpass"
          inputClassName={classnames("form-control", {
            "is-invalid": password,
          })}
          inputPlaceholder="Password"
          inputName="password"
          inputRef={register(passwordSchema)}
        />
        <ErrorMessage message={password?.message} />
      </div>
      {loading ? (
        <center>
          <AppLoader />
        </center>
      ) : (
        <div className="form-group">
          <div className="peers ai-c jc-sb fxw-nw">
            <div className="peer">
              <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                <Inputfield
                  inputType="checkbox"
                  inputClassName="peer"
                  inputName="rememberMe"
                  inputId="checkme"
                  inputRef={register}
                />
                <Label
                  htmlFor="rememberMe"
                  labelClassName="peers peer-greed js-sb ai-c"
                >
                  <span className="peer peer-greed">Remember Me</span>
                </Label>
              </div>
            </div>
            <div className="peer">
              <Button buttonType="submit" buttonId="login" buttonClassName="btn btn-primary">
                Login
              </Button>
            </div>
          </div>
          {/* <center>
            <div className="peer">
              <Button
                buttonType="button"
                buttonClassName="btn btn-success mt-4"
                buttonOnClick={() => handleGoogleSignin()}
              >
                Login with Google
              </Button>
            </div>
          </center> */}
        </div>
      )}
    </form>
  );
};

SigninView.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
};

SigninView.defaultProps = {
  history: {},
};

export default SigninView;
