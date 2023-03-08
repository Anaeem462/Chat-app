import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./Components/ChatFeed";
const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID='39636cb6-f0c9-4627-8773-287fcdc647cb'
            userName='JavascriptMaster'
            userSecret='12345678'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
