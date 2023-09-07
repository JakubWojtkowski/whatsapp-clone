import {
  Add,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  Send,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useStateValue } from "../StateProvider";

function Chat(props) {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [incoming, setIncoming] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatName, setChatName] = useState("");
  const { chatId } = useParams();
  const [{ user }, dispatch] = useStateValue();

  const sendMessage = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, `chats/${chatId}/messages`), {
      message: input,
      name: user.displayName,
      timestamp: serverTimestamp(),
    });

    getMessages();

    setInput("");
  };

  const getChat = async () => {
    // chat
    const docRef = doc(db, "chats", chatId);
    const docSnap = await getDoc(docRef);
    docSnap.data() ? setChatName(docSnap.data().name) : console.log("no");
  };

  const getMessages = async () => {
    // messages
    const q = query(collection(db, "chats"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    data.map(async (el) => {
      const messageQ = query(
        collection(db, `chats/${chatId}/messages`),
        orderBy("timestamp", "asc")
      );
      const messageDetails = await getDocs(messageQ);
      const messageInfo = messageDetails.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(messageInfo);
      setMessages(messageInfo);
      console.log(messages);
    });
  };

  useEffect(() => {
    getChat();
    getMessages();
  }, [chatId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [chatId]);

  return (
    <Container>
      <ChatHeader>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <ChatHeaderInfo>
          <h3>{chatName}</h3>
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
        {messages &&
          messages.map((message) => {
            return (
              <ChatBodyMessage
                key={message.id}
                id={message.id}
                toggle={incoming}
              >
                <ChatBodyMessageName>{message.name}</ChatBodyMessageName>
                {message.message}
                <ChatBodyMessageTime>
                  {new Date(message.timestamp?.toDate()).toUTCString()}
                </ChatBodyMessageTime>
              </ChatBodyMessage>
            );
          })}
      </ChatBody>

      <ChatFooter>
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <IconButton>
          <Add />
        </IconButton>

        <ChatFooterForm>
          <FormInput
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></FormInput>
          <FormButton onClick={sendMessage} type="submit">
            Send a message
          </FormButton>
        </ChatFooterForm>

        <IconButton>{input === "" ? <Mic /> : <Send />}</IconButton>
      </ChatFooter>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  background: #202c33;

  .MuiSvgIcon-root {
    color: #aebac1;
    font-size: 24px !important;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  border-bottom: 1px solid #0c1317;
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
  padding: 30px;
  position: relative;
  z-index: 0;

  &:before {
    position: absolute;
    content: "";
    background-image: url("/images/whatsapp-background.png");
    background-size: contain;
    background-repeat: repeat;
    background-position: top;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.75;
  }
  ${"" /* overflow-y: scroll; */}
`;

const ChatBodyMessage = styled.div`
  position: relative;
  font-size: 16px;
  box-shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13);
  padding: 10px;
  border-radius: 8px;
  width: fit-content;
  margin-bottom: 18px;

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

const ChatFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;

  .MuiSvgIcon-root {
    color: #8696a0;
    padding: 6px;
    font-size: 26px !important;
  }
`;

const ChatFooterForm = styled.form`
  flex: 1;
  display: flex;
`;

const FormInput = styled.input`
  background: #2a3942;
  flex: 1;
  border-radius: 8px;
  border: none;
  padding: 14px;
  color: #e9edef;

  &:focus {
    outline: none;
  }
`;

const FormButton = styled.button`
  display: none;
`;
