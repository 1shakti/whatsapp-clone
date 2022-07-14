import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import db from "../lib/firebase.prod";

export default function SidebarContainer() {

  const [rooms, setRooms] = useState([]);


  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => 
         setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
         ) 
    );

    return () => {
      unsubscribe();
    }

  }, []);

  return (
        <Sidebar>
            <Sidebar.Header />
            <Sidebar.Search />
            <Sidebar.Main>
              <Sidebar.Chatcard addNewChat />
              {rooms.map((room) => (
                <Sidebar.Chatcard key={room.id} id={room.id} name={room.data.name} />
              ))}
            </Sidebar.Main>
        </Sidebar>
  )
}

