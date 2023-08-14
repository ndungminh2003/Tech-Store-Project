import React from 'react'
import { ChatEngine } from 'react-chat-engine'

export default function ChatSupport() {
  return (
    <ChatEngine 
      projectID="f63c5c4f-a8b1-4e55-9a3f-b2984621d508"
      userName='Nguyen Dung Minh'
      userSecret='123123'
      height='calc(80vh - 12px)'
      
      onConnect={(creds, chats) => {
        console.log('Connected to ChatEngine:', creds);
      }}
      onFail={(error) => {
        console.error('ChatEngine connection failed:', error);
      }}
    />
  )
}
