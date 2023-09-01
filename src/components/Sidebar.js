import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import { FilterList, MoreVert, SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Sidebar() {
  const [chats, setChats] = useState([]);

  async function queryCollection() {
    const unsubscribe = onSnapshot(collection(db, "chats"), (snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }

  useEffect(() => {
    queryCollection();
  }, []);

  return (
    <Container>
      <SidebarHeader>
        <IconButton>
          <Avatar />
        </IconButton>

        <SidebarHeaderRight>
          <IconButton>
            <GroupsIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </SidebarHeaderRight>
      </SidebarHeader>

      <SidebarSearch>
        <SidebarSearchContent>
          <SearchOutlined />
          <SidebarInput placeholder="Search or start new chat" type="text" />
        </SidebarSearchContent>
        <IconButton>
          <FilterList />
        </IconButton>
      </SidebarSearch>
      {chats.map((chat) => {
        return <SidebarChat key={chat.id} id={chat.id} name={chat.data.name} />;
      })}
      <SidebarChats></SidebarChats>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;

  .MuiSvgIcon-root {
    color: #aebac1;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  background: #202c33;
  border-right: 1px solid #0c1317;
`;

const SidebarHeaderRight = styled.div`
  display: flex;
  align-items: center;
  min-width: 10vw;

  .MuiSvgIcon-root {
    margin-right: 10px;
    font-size: 24px !important;
  }
`;

const SidebarSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 39px;
  padding: 10px;
  background: #111b21;

  .MuiSvgIcon-root {
    color: grey;
  }
`;

const SidebarSearchContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 8px;
  padding: 4px 16px;
  background-color: #2a3942;
`;

const SidebarInput = styled.input`
  background-color: #2a3942;
  flex: 1;
  border: none;
  margin: 0 16px;
  color: #e9edef;

  &:focus {
    outline: none;
  }
`;

const SidebarChats = styled.div`
  background: #111b21;
  flex: 1;
  overflow-y: scroll;
`;
