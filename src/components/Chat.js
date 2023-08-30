import { MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

function Chat(props) {
  const [seed, setSeed] = useState("");
  const [incoming, setIncoming] = useState(false);

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

      <ChatBody>
        <ChatBodyMessage toggle={incoming}>
          <ChatBodyMessageName>Jakub Wojtkowski</ChatBodyMessageName>
          Hello world
          <ChatBodyMessageTime>06:52</ChatBodyMessageTime>
        </ChatBodyMessage>
      </ChatBody>

      <ChatFooter></ChatFooter>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
  background: #202c33;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #0c1317;

  .MuiSvgIcon-root {
    color: lightgrey;
  }
`;

const ChatHeaderInfo = styled.div`
  flex: 1;
  padding-left: 20px;

  h3 {
    margin-bottom: 10px;
    font-weight: 500;
  }

  p {
    color: #8696a0;
  }
`;

const ChatHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
`;

const ChatBody = styled.div`
  flex: 1;
  background-image: url("/images/whatsapp-background.png");
  background-size: cover;
  background-repeat: repeat;
  padding: 30px;

  ${"" /* overflow-y: scroll; */}
`;

const ChatBodyMessage = styled.div`
  position: relative;
  font-size: 16px;
  box-shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13);
  padding: 10px;
  border-radius: 8px;
  width: fit-content;
  margin-bottom: 2px;

  ${(props) => {
    if (props.toggle) {
      return `
        background-color: #202c33;
      `;
    } else {
      return `
        background-color: #005c4b;
        margin-left: auto;
      `;
    }
  }}
`;

const ChatBodyMessageName = styled.span`
  position: absolute;
  top: -15px;
  font-size: xx-small;
  font-weight: 700;
`;

const ChatBodyMessageTime = styled.span`
  margin-left: 10px;
  font-size: xx-small;
  color: #8696a0;
`;

const ChatFooter = styled.div``;
