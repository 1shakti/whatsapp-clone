import React from 'react';
import Sidebar from '../components/sidebar';

export default function SidebarContainer() {
  return (
        <Sidebar>
            <Sidebar.Header />
            <Sidebar.Search />
            <Sidebar.Main>
              <Sidebar.Chatcard />
              <Sidebar.Chatcard />
              <Sidebar.Chatcard />
            </Sidebar.Main>
        </Sidebar>
  )
}

