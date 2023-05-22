import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([] as string[]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Tela de Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
}