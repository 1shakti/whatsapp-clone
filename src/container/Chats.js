import React, { useState, useRef } from 'react';
import MainContent from '../components/chats';

export default function Chats() {
const [inputVal, setInputVal] = useState("");
const userInput = useRef(null);

function sendMessage(e) {
    e.preventDefault();
    setInputVal(""); 
}


  return (
    <MainContent>
        <MainContent.Header />
        <MainContent.ChatSection>
          <MainContent.ChatMessage chatreciever={true} />
        </MainContent.ChatSection>
        <MainContent.ChatFooter 
          inputProps={{
            ref: userInput,
            onChange: () => setInputVal(userInput.current.value),
            value: inputVal,
          }} 

          sendMessage={sendMessage}
        />
    </MainContent>
  )
}
