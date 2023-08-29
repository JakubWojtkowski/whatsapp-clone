import { MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <Container>
      <ChatHeader>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <ChatHeaderInfo>
          <h3>Name</h3>
          <p>Last seen at 03:46</p>
        </ChatHeaderInfo>

        <ChatHeaderRight>
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </ChatHeaderRight>
      </ChatHeader>

      <ChatBody></ChatBody>

      <ChatFooter></ChatFooter>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  flex: 0.65;
  background: #202c33;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  .MuiSvgIcon-root {
    color: lightgrey;
  }
`;

const ChatHeaderInfo = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const ChatHeaderRight = styled.div``;

const ChatBody = styled.div``;

const ChatFooter = styled.div``;
