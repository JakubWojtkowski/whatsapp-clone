import React from "react";
import { styled } from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Sidebar() {
  return (
    <Container>
      <SidebarHeader>
        <AccountCircleIcon />
        <SidebarHeaderRight>
          <GroupsIcon />
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </SidebarHeaderRight>
      </SidebarHeader>

      <SidebarSearch></SidebarSearch>

      <SidebarChats></SidebarChats>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #202c33;
`;

const SidebarHeader = styled.div``;

const SidebarHeaderRight = styled.div``;

const SidebarSearch = styled.div``;

const SidebarChats = styled.div``;
