import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { styled } from "styled-components";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <Container>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <ChatInfo>
        <ChatInfoHeader>
          <h2>Name</h2>
          <span>12:36</span>
        </ChatInfoHeader>
        <p>Last message ...</p>
      </ChatInfo>
    </Container>
  );
}

export default SidebarChat;

const Container = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #202c33;

  &:hover {
    background: #202c33;
  }
`;

const ChatInfo = styled.div`
  margin-left: 15px;
  flex: 1;

  p {
    font-size: 13px;
    color: #8696a0;
  }
`;

const ChatInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  span {
    color: #8696a0;
    font-size: 12px;
    margin-top: 6px;
  }
`;
