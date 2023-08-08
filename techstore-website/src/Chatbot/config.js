import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Support Agent';

const config = {

  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'grey',
    },
    chatButton: {
      backgroundColor: 'gray',
    },
  },
};

export default config;