import React from "react";
import { styled } from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <Container>
      <SidebarHeader>
        <SettingsIcon />
      </SidebarHeader>

      <SidebarSearch></SidebarSearch>

      <SidebarChats></SidebarChats>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const SidebarHeader = styled.div``;

const SidebarSearch = styled.div``;

const SidebarChats = styled.div``;
