import React from "react";
import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <AppContainer>
      <AppContent>
        <Sidebar />
        {/* <Chat></Chat> */}
      </AppContent>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: grid;
  place-items: center;
  background: #0a1014;
  height: 100vh;
  color: #e9edef;
`;

const AppContent = styled.div`
  display: flex;
  height: 95vh;
  width: 97.5vw;
  box-shadow: -1px 4px 10px -6px rgba(0, 0, 0, 0.7);

  @media only screen and (max-width: 1024px) {
    height: 100vh;
    width: 100vw;
  }
`;
