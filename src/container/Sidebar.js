import React from 'react';
import Sidebar from '../components/sidebar';
import { SideMain, SideSearch } from '../components/sidebar/styles';

export default function SidebarContainer() {
  return (
        <Sidebar>
          <Sidebar.Header />
          <Sidebar.Main>
            <Sidebar.Search />
            <Sidebar.Chatcard />
          </Sidebar.Main>
        </Sidebar>
  )
}

