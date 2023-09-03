import { Button } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9);

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
  }
`;

const LoginText = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
