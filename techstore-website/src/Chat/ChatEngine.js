import React, { useEffect, useState } from "react";

import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'

const ChatEngine = props => {
    const [showChat, setShowChat] = useState(false)

    useEffect(() => {
        if (props.visible && props.haveEmail) {
            setTimeout(() => {
                setShowChat(true)
            }, 500)
        }
        else {
            setShowChat(false);
        }
    },[props.visible, props.haveEmail])
    return (
        <div
            className='transition-5'
            style={{
                ...styles.chatEngineWindow,
                ...{ 
                    height: props.visible ? '100%' : '0px',
                    zIndex: props.visible ? '100' : '0',
                }
            }}
        >
            {
                showChat &&
                <ChatEngineWrapper>
                    <Socket 
                        projectID="f63c5c4f-a8b1-4e55-9a3f-b2984621d508"
                        userName={props.user?.email || ''}
                        userSecret={props.user?.email || ''}
                    />
                    <ChatFeed activeChat={props.chat?.id || ''} />
                </ChatEngineWrapper>
            }
        </div>
    )
}

export default ChatEngine;

const styles = {
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
}