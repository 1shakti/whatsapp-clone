import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainContent from '../components/chats';
import db from '../lib/firebase.prod';

export default function Chats() {
const [inputVal, setInputVal] = useState("");
const [roomName, setRoomName] = useState("");
const { roomId } = useParams();
const userInput = useRef(null);

useEffect(() => {
  if(roomId){
    db.collection("rooms").doc(roomId).onSnapshot((snapshot) => setRoomName(snapshot.data().name));
  }
},[roomId]);


function sendMessage(e) {
    e.preventDefault();
    setInputVal(""); 
}


  return (
    <MainContent>
        <MainContent.Header roomName={roomName} />
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
