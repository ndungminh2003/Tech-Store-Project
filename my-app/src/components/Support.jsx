import React from 'react'
import { useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ActionProvider from '../Chatbot/ActionProvider'
import config from '../Chatbot/config'
import MessageParser from '../Chatbot/MessageParser'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import '../Chatbot/styles.css'

export default function Support() {

  const [showBot, toggleBot] = useState(false);

  return (
    <div className=' relative '>

      {showBot && (
          <button onClick={() => toggleBot((prev) => !prev)} className=' absolute z-50 right-4 top-[-27px] '>
            <span className=' text-2xl font-bold text-white '>x</span>
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
            <div className= ' w-96 h-12 rounded-md p-4 bg-slate-400 flex items-center gap-2'>
              <SupportAgentIcon sx={{fontSize: '35px', color: 'black'}}/>
              <span className=' font-bold text-lg '>Chat with support agent</span>
            </div>
          </button>
        )
      }
      


    </div>
  )
}
