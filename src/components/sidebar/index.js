import { useState } from "react";
import {
SidebarContainer,
SideHeader,
SideSearch,
Main,
SideInputContainer,
SideHeaderRight,
CardContainer
} from "./styles";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from "react";
import db from "../../lib/firebase.prod";
import { Link } from "react-router-dom";

export default function Sidebar({children}){
    return (
        <SidebarContainer>{children}</SidebarContainer>
    )
}

Sidebar.Header = function SidebarHeader({children, ...props}){
    return (
        <SideHeader {...props}>
           <Avatar />
           <SideHeaderRight>
              <IconButton>
                <DonutLargeIcon />
              </IconButton>  
              <IconButton>
                <ChatIcon />
              </IconButton>  
              <IconButton>
                <MoreVertIcon />
              </IconButton>                                
           </SideHeaderRight>
        </SideHeader>
    )
}


Sidebar.Search = function SideBarSearch({...props}){
    const [searchval, setSearchVal] = useState(''); 
    return (
        <SideSearch>
            <SideInputContainer>
            <SearchIcon /> 
                <input 
                    autoFocus 
                    value={searchval}
                    {...props}
                    placeholder="Search or start new chat"
                    onChange = {() => setSearchVal('')} 
                />
                <img src="" alt="" />
            </SideInputContainer> 
        </SideSearch>
    )
}

Sidebar.Main = function SidebarMain({children}){
    return <Main>{children}</Main>;
}

Sidebar.Chatcard = function SidebarChatcard({id , name, addNewChat }){

    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const createChat = () => {
        const roomName = prompt("Please Enter name for chat");
            if (roomName){
                db.collection("rooms").add({
                    name: roomName,
                });     
            }
    }

    return !addNewChat ? (
        <Link to={`/room/${id}`}>
            <CardContainer>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />    
                <div className="user-details">
                    <h2>{name}</h2>
                    <p>Last message</p>
                </div>
            </CardContainer> 
        </Link>
    ):(
        <CardContainer onClick={createChat}>
            <h2>Add New Chat</h2>
        </CardContainer>
    )
}   

