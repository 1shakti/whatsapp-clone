import { useState } from "react";
import {
SidebarContainer,
SideHeader,
SideSearch,
SideMain,
Card,
SideInputContainer,
SideHeaderRight
} from "./styles";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

Sidebar.Main = function SideBarMain({children}){
    return (
        <SideMain>
            {children}
        </SideMain>
)}

Sidebar.Search = function SideBarSearch({...props}){
    const [searchval, setSearchVal] = useState(''); 
    return (
        <SideSearch>
            <SideInputContainer> 
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

Sidebar.Chatcard = function SidebarChatcard({name,lastmessage,children, ...props}){
    return (
        <Card {...props}>           
            <Avatar src="/broken-image.jpg" />
            <div className="user-details">
                <p className="name">{name}</p>
                <p className="message">{lastmessage}</p>
            </div>         
        </Card>
    )
}   

