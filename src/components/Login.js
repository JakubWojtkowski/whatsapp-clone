import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const [{}, dispatch] = useStateValue();

  const history = useHistory();

  const signIn = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
        <Route path="/" />;
      }
    });
  }, []);

  return (
    <Container>
      <Content>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/180px-WhatsApp.svg.png"
          alt=""
        />
        <LoginText>Sign in to WhatsApp</LoginText>

        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  padding: 100px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.4);

  img {
    height: 100px;
    object-fit: contain;
    margin-bottom: 40px;
  }

  button {
    margin-top: 50px;
    background-color: #0a8d48 !important;
    color: inherit !important;
    text-transform: inherit !important;
    letter-spacing: 0.6px;
    transition: all 250ms ease-in-out;
  }

  button:hover {
    background-color: #00a884 !important;
  }
`;

const LoginText = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
