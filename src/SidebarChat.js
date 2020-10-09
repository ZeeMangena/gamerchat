import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';

function SidebarChat() {
    const [seed, setSeed] = useState(""); 
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    //Usually has a url image link to the users face
    //Or a randomly generated dicebear avatar (.svg image as shown below)
    //Random avatars require setup, an RNG function as seen above to concatenate with the url and feed into the site
    //The concat is done using a backtick (``) quote string and $ sign templating

  return (
    <div className = "sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className = "sidebarChats__info">
            <h2>Room name</h2>
            <p>Last message...</p>
        </div>
    </div>
  );
}

export default SidebarChat
