import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { styled } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { DoneAll } from "@mui/icons-material";

function SidebarChat(props) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getLastMessage = async () => {
      if (props.id) {
        const q = query(collection(db, "chats"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        data.map(async (el) => {
          const querySnapshot = await getDocs(
            query(
              collection(db, `chats/${props.id}/messages`),
              orderBy("timestamp", "desc")
            )
          );

          const messageInfo = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessages(messageInfo);
        });
      }
    };
    getLastMessage();
  }, [messages]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <Link to={`/chats/${props.id}`}>
      <Container>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <ChatInfo>
          <ChatInfoHeader>
            <h2>{props.name}</h2>
            <span>12:36</span>
          </ChatInfoHeader>
          <ChatInfoMessage>
            <DoneAll /> <p>{messages[0]?.message}</p>
          </ChatInfoMessage>
        </ChatInfo>
      </Container>
    </Link>
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
    font-size: 16px;
    margin-bottom: 8px;
  }

  span {
    color: #8696a0;
    font-size: 12px;
    margin-top: 6px;
  }
`;

const ChatInfoMessage = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  gap: 5px;

  .MuiSvgIcon-root {
    font-size: 16px !important;
  }
`;
