// Messages area + input 

import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import ConversationHeader from "./COnversationHeader";

const ChatWindow = ({ activeUser }) => {
    // const [messages, setMessages] = useState([
    //     { id: 1, sender: "user", text: "Hi Neil, how are you?" },
    //     { id: 2, sender: "admin", text: "Hello Aditya" },
    // ]);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([]);
    }, [activeUser]);

    const handleSend = (payload) => {
        const newMessage = {
            id: Date.now(),
            sender: "admin",
            ...payload,
        };

        setMessages((prev) => [...prev, newMessage]);

        // dummy auto reply
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "user",
                    // text: `Thank you for contacting me${activeUser ? `, ${activeUser}` : ""}`,
                    // text: `Thank you for contacting me${activeUser ? `, ${activeUser.name}` : ""}`,
                    text: "Hi Mike, how are you?",
                },
            ]);
        }, 800);
    };

    if (!activeUser) {
        return (
            <div className="h-full flex items-center justify-center text-sm text-[var(--text-secondary)]">
                Select a user to start chatting
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-[var(--bg-page)]">

            {/* Conversation Header  */}
            <ConversationHeader user={activeUser} />

            {/* Messages  */}
            <MessageList messages={messages} />

            {/* Input  */}
            <ChatInput onSend={handleSend} />

        </div>
    );
};

export default ChatWindow;
