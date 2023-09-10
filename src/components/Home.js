import { Https } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Image src={"/images/home-image.png"} />
          <Heading>Download WhatsApp for your System</Heading>
          <Description>
            Make calls and share your screen with a faster downloadable app
            tailored to your system.
          </Description>
          <DownloadButton>Download the app</DownloadButton>
        </Main>
        <Footer>
          <Https />
          Full encryption
        </Footer>

        <Border />
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex: 0.7;
  justify-content: center;
  align-items: center;
  background: #202c33;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 26vh;
  object-fit: contain;
`;

const Heading = styled.h1`
  font-weight: lighter;
  color: lightgray;
  max-width: 550px;
  min-width: 200px;
  text-align: center;
`;

const Description = styled.div`
  font-weight: lighter;
  font-size: 14px;
  text-align: center;
  max-width: 450px;
  min-width: 200px;
  color: #8696a0;
  letter-spacing: 0.25px;
`;

const DownloadButton = styled.div`
  padding: 10px 24px;
  border-radius: 24px;
  background-color: #00a884;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  color: #111b21;
  font-weight: 500;
  font-size: 13.5px;
  margin-top: 15px;

  &:hover {
    background-color: #00b888;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  letter-spacing: 0.25px;
  color: #8696a0;

  position: absolute;
  bottom: 40px;
  font-size: 13px;
  line-height: 20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  .MuiSvgIcon-root {
    color: #8696a0;
    font-size: 13px !important;
  }
`;

const Border = styled.div`
  position: absolute;
  height: 1vh;
  background-color: #00a884;
  flex: 1;
  bottom: 0;
  left: 0;
  right: 0;
`;
