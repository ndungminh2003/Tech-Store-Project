import React from 'react'
import { useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ActionProvider from '../Chatbot/ActionProvider'
import config from '../Chatbot/config'
import MessageParser from '../Chatbot/MessageParser'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import '../Chatbot/styles.css'
import { useLocation } from 'react-router-dom'

export default function Support() {

  const [showBot, toggleBot] = useState(false);

  let location = useLocation();

  if (location.pathname !== '/'){
    return null;
  }

  return (
    <div className=' tw-relative '>

      {showBot && (
          <button onClick={() => toggleBot((prev) => !prev)} className=' tw-absolute tw-z-50 tw-right-4 tw-top-[-27px] '>
            <span className=' tw-text-2xl tw-font-bold tw-text-white '>x</span>
          </button>
        )
      }

      {showBot && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )
      }

      { !showBot && (
          <button onClick={() => toggleBot((prev) => !prev)}>
            <div className= ' tw-w-96 tw-h-12 tw-rounded-md tw-p-4 tw-bg-slate-400 tw-flex tw-items-center tw-gap-2'>
              <SupportAgentIcon sx={{fontSize: '35px', color: 'black'}}/>
              <span className=' tw-font-bold tw-text-lg '>Chat with support agent</span>
            </div>
          </button>
        )
      }
    </div>
  )
}
