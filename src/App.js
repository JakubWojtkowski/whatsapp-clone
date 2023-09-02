import React from "react";
import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AppContainer>
      <AppContent>
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/chats/:chatId">
              <Chat />
            </Route>

            <Route path="/">
              <h1>home screen</h1>
            </Route>
          </Switch>
        </Router>
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
`;

const AppContent = styled.div`
  display: flex;
  height: 95vh;
  width: 97.5vw;
  box-shadow: -1px 4px 10px -6px rgba(0, 0, 0, 0.7);

  @media only screen and (max-width: 1440px) {
    height: 100vh;
    width: 100vw;
  }
`;
