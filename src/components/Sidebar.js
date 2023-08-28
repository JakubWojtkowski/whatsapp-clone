import React from "react";
import { styled } from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { FilterList, SearchOutlined } from "@mui/icons-material";

function Sidebar() {
  return (
    <Container>
      <SidebarHeader>
        <IconButton>
          <AccountCircleIcon />
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
            <MoreVertIcon />
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

      <SidebarChats></SidebarChats>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
  background: #202c33;

  .MuiSvgIcon-root {
    color: lightgrey;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const SidebarHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 10vw;

  .MuiSvgIcon-root {
    margin-right: 2px;
    font-size: 24px !important;
  }
`;

const SidebarSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 39px;
  padding: 10px;

  .MuiSvgIcon-root {
    color: grey;
  }
`;

const SidebarSearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 4px 16px;
`;

const SidebarInput = styled.input`
  background-color: #202c33;
  border: none;
  margin-left: 12px;

  &:focus {
    outline: none;
  }
`;

const SidebarChats = styled.div`
  background: #111b21;
  flex: 1;
`;
