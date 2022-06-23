import React from 'react'
import MainContent from '../components/chats'

export default function Chats() {
  return (
    <MainContent>
        <MainContent.Header />
        <MainContent.ChatSection>
          <MainContent.ChatMessage />
        </MainContent.ChatSection>
    </MainContent>
  )
}
