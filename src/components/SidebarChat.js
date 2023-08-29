import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { styled } from "styled-components";

function SidebarChat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <Container>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <ChatInfo>
        <ChatName>Name</ChatName>
        <ChatMessage>Last message...</ChatMessage>
      </ChatInfo>
    </Container>
  );
}

export default SidebarChat;

const Container = styled.div`
  border-width: 1px 0;
  padding: 8px 16px;
`;

const ChatInfo = styled.div`
  border-bottom: 1px solid #202c33;
`;

const ChatName = styled.div``;

const ChatMessage = styled.div``;
