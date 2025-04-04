import React from 'react';
import chatgptlogo from './..//assets/chatgptlogo.png'
import nouserlogo from './../assets/nouserlogo.png'
import '../styles/LeftSection.css'


const LeftSection = () => {
    const allChats = [
        { id: 1, chatName: 'This is sample Chat 1' },
        { id: 2, chatName: 'This is sample Chat 2' },
        { id: 3, chatName: 'This is sample Chat 3' },
        { id: 4, chatName: 'This is sample Chat 4' },
        { id: 5, chatName: 'This is sample Chat 5' }
    ];

    return (
        <div className="leftSection"> 
            <div className="newChat">
                <div>
                    <img src={chatgptlogo} alt="ChatGPT" width={50} height={50} />
                    <p className="text1">CHATGPT BOT</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>

            <div className="allChats">
                {allChats.map(chat => (
                    <div key={chat.id} className="chat">
                        <p className="text1">{chat.chatName}</p>
                    </div>
                ))}
            </div>

            <div className="newChat">
                <div>
                    <img src={nouserlogo} alt="User" width={50} height={50} />
                    <p className="text1">vaishnavitile2210@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSection;