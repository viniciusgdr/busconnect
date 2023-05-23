import { Navbar } from '@busconnect/components/navbar';
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      asBot: true,
      text: `Olá! Seja bem vindo ao WhatsApp da BusConnect.\n\n

Com o que posso lhe ajudar?`,
      buttons: []
    },
    {
      asBot: true,
      buttons: [
        {
          text: 'Descobrir Rota',
          value: '1'
        },
        {
          text: 'Previsão de Ônibus',
          value: '2'
        },
        {
          text: 'Recarregar seu Cartão BEM',
          value: '3'
        }
      ],
      text: 'Selecione uma opção:'
    }
  ] as {
    asBot: boolean
    text: string,
    buttons: {
      text: string,
      value: string
    }[]
  }[]);

  return (
    <div className='h-screen bg-white text-black min-h-screen'>
      <Navbar />
      <div className="chat flex flex-col p-16 ">
        <div className="messages">
          {
            messages.map((message, index) => {
              return (
                message.asBot ? (
                  <>
                    <div className="chat chat-start  w-auto">
                      <div className="chat-bubble bubble" >
                        <p id="typing-text">{message.text}</p>
                      </div>
                    </div>
                    <div>
                      {
                        message.buttons.length > 0 ? (
                          <div className="chat chat-start">
                            <div className="chat-bubble">
                              {
                                message.buttons.map((button, index) => {
                                  return (
                                    <button key={index} className="bg-blue-500 text-white p-2 rounded-md mr-2">
                                      {button.text}
                                    </button>
                                  )
                                })
                              }
                            </div>
                          </div>
                        ) : null
                      }
                    </div>
                  </>
                ) : (
                  <div className="chat chat-end">
                    <div className="chat-bubble">
                      {message.text}
                    </div>
                  </div>
                )
              )
            })
          }
        </div>
      </div>
    </div>
  );
}