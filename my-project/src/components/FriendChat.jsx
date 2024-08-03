import React, { useEffect, useState } from "react";
import unimateLogo from '../assets/Unimate.png';
import menu from '../assets/Menu.png';
import guy from '../assets/guy.png';
import john from '../assets/john.png';
import james from '../assets/james.png';
import peter from '../assets/peter.png';
import { Link } from 'react-router-dom';
import { Search, Send } from 'lucide-react';
import { SERVER_URL } from "../constants/server";

export default function FriendChat() {
    const [friends, setFriends] = useState([]);
    const [selectedFriend, setSelectedFriend] = useState([]);
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        // Here you would typically send the message to your backend
        console.log('Sending message:', message);
        
        setMessagesList(prev => [...prev, message]);
        
        setMessage('');
    };

    useEffect(() => {
        // Fetching friends
        const fetchMyFriends = async () => {
            try {
                const res = await fetch(`${SERVER_URL}/v1/friend`, {
                    method: "GET",
                    headers: {
                        "X-Current-User": localStorage.getItem("user"),
                    },
                });
                
                if (!res.ok) {
                    throw new Error("Failed to fetch friends");
                }

                let friendList = (await res.json()).data.friends;

                friendList = friendList.map((friend, index) => {
                    return {
                        ...friend,
                        avatar: index % 3  == 0 ? john : index % 3 == 1 ? james : peter,
                        // Change UI for last message -> friend's email
                        lastMessage: friend.student_email,
                    }
                });

                setFriends(friendList);
                setSelectedFriend(friendList[0]);
            } catch (err) {
                console.error("Error fetching all friends:", err);
            }
        };

        fetchMyFriends();
    }, []);

    return(
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-between mx-3 my-5">
                <img src={unimateLogo} alt="Unimate Logo" className="w-40 h-auto" />
                <nav className='flex justify-between bg-gray-200 rounded-full py-3 pr-4 w-1/2 items-center'>
                    <ul className='flex justify-around w-full font-semibold'>
                        <li>
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li>
                            <Link to="/friendChat">Your Friends</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Your Events</Link>
                        </li>
                    </ul>
                    <Search size={35} className="text-white bg-indigo-700 rounded-full p-2" />
                </nav>
                <div className='flex bg-gray-100 p-3 rounded-full'>
                    <img src={menu} alt="menu" className="w-10 h-auto" />
                    <img src={guy} alt="guy" className="w-10 h-auto" />
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Friends List */}
                <div className="w-1/4 bg-gray-100 overflow-y-auto">
                    {friends.map((friend, index) => (
                        <div 
                            key={friend.id} 
                            className={`flex items-center p-4 cursor-pointer hover:bg-gray-200 ${selectedFriend.id === friend.id ? 'bg-gray-200' : ''}`}
                            onClick={() => {
                                console.log("select friend", friend);
                                setSelectedFriend(friend);
                            }}
                        >
                            <img src={index % 3  == 0 ? john : index % 3 == 1 ? james : peter} alt={friend.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h3 className="font-semibold">{friend.name}</h3>
                                <p className="text-sm text-gray-600 truncate">{friend.lastMessage}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Window */}
                <div className="flex-1 flex flex-col bg-white">
                    {/* Chat Header */}
                    <div className="flex items-center p-4 border-b">
                        <img src={john} alt={selectedFriend.name} className="w-10 h-10 rounded-full mr-4" />
                        <h2 className="font-semibold">{selectedFriend.name}</h2>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {/* You would map through actual messages here */}
                        <div className="mb-4">
                            <p className="bg-gray-200 rounded-lg p-2 inline-block">Hey, how are you?</p>
                        </div>
                        <div className="mb-4 text-right">
                            <p className="bg-indigo-500 text-white rounded-lg p-2 inline-block">I'm good, thanks! How about you?</p>
                        </div>
                        {messagesList.length > 0 ? (
                            messagesList.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 ${index % 2 == 0 ? 'text-left' : 'text-right'}`}
                                >
                                    <p 
                                        className={`${index % 2 == 0 ? "bg-gray-200 rounded-lg p-2 inline-block" : "bg-indigo-500 text-white rounded-lg p-2 inline-block"}`}
                                    >
                                        {message}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <>
                            </>
                        )}
                    </div>

                    {/* Message Input */}
                    <form onSubmit={handleSendMessage} className="border-t p-4 flex">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button type="submit" className="ml-2 bg-indigo-500 text-white rounded-full p-2">
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}