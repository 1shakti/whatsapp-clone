import React, { useEffect, useState } from 'react';
import {
Container,    
ChatHeader,
Chatsection,
Message,
Footer
} from './styles';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

export default function MainContent({children}) {
  return (
    <Container>{children}</Container>
  )
}

MainContent.Header = function MainContentHeader() {
    
    const [seed, setSeed] = useState("");
    
    useEffect(() => {
        setSeed(Math.floor(Math.random * 5000))
    },[]);
    
    return (
        <ChatHeader>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerinfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headeright">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>  
                    <IconButton>
                        <AttachFile />
                    </IconButton>  
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>  
                </div>
            
        </ChatHeader>
    )
}


MainContent.ChatSection = function MainContentChatSection({children}){
    return (
        <Chatsection>{children}</Chatsection>
    ) 
}

MainContent.ChatMessage = function MainContentChatMessage({...props}){
    return (
        <Message {...props}>
            <span className='chat__name'>Shakti</span>
            Hey guys
            <span className='chat__timestamp'>11:36pm</span>    
        </Message>
    )
}


MainContent.ChatFooter = function MainContentChatFooter({inputProps, sendMessage}){

    return (
        <Footer>
            <InsertEmoticonIcon />
            <form>
                <input 
                    type="text" 
                    placeholder='Type a message'  { ...inputProps }
                />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon />
        </Footer>
    )
}
