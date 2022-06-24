import React from 'react'
import MainContent from '../components/chats'

export default function Chats() {
  return (
    <MainContent>
        <MainContent.Header />
        <MainContent.ChatSection>
          <MainContent.ChatMessage chatreciever={false}/>
        </MainContent.ChatSection>
        <MainContent.ChatFooter />
    </MainContent>
  )
}
