import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  let redirect;

  useEffect(() => {
    if (userInfo) {
      redirect = userInfo.isAdmin ? "/adminHome" : "/agentHome";

      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <div class="content d-flex justify-content-center align-items-center">
        <form class="login-form" onSubmit={submitHandler}>
          <div class="card mb-0">
            <div class="card-body">
              <div class="text-center mb-3">
                <img
                  src="
svme.png"
                  alt="Save-me"
                />
                <br />
                <span class="d-block text-muted">
                  Enter your credentials below
                </span>
              </div>
              <br />

              <div class="form-group form-group-feedback form-group-feedback-left">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  placeholder="Email"
                  type="email"
                />
                <div class="form-control-feedback">
                  <i class="icon-user text-muted"></i>
                </div>
              </div>

              <div class="form-group form-group-feedback form-group-feedback-left">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div class="form-control-feedback">
                  <i class="icon-lock2 text-muted"></i>
                </div>
              </div>

              <div class="form-group">
                <button
                  disabled={!email && !password}
                  type="submit"
                  class="btn btn-success btn-block"
                >
                  Sign in <i class="icon-circle-right2 ml-2"></i>
                </button>
              </div>
            </div>
            <div class="form-group text-center text-muted content-divider">
              <span class="px-2">Don't have an account?</span>
            </div>
            <div class="form-group">
              <a href="/register" class="btn btn-light btn-block">
                Sign up
              </a>
            </div>
            <span class="form-text text-center text-muted">
              By continuing, you're confirming that you've read our{" "}
              <a href="#">Terms &amp; Conditions</a> and{" "}
              <a href="#">Cookie Policy</a>
            </span>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default LoginScreen;
