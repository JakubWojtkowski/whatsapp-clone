import React, { useState } from "react";
import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Home from "./components/Home";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <AppContainer>
      {!user ? (
        <Login />
      ) : (
        <AppContent>
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/chats/:chatId">
                <Chat />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </AppContent>
      )}
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
