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

Sidebar.Chatcard = function SidebarChatcard({name,lastmessage,children, ...props}){

    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    return (
            <CardContainer>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />    
                <div className="user-details">
                    <h2>Room name</h2>
                    <p>Last message</p>
                </div>
            </CardContainer>
    )
}   

