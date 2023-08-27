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
  background-color: #0c1317;
  height: 100vh;
`;

const AppContent = styled.div`
  display: flex;
  height: 95vh;
  width: 95vw;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
`;
