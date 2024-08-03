import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/Menu.png';
import guy from '../assets/guy.png';
import unimateLogo from '../assets/Unimate.png';
import ScrollableNav from './ScrollableNav';

import john from '../assets/john.png';
import james from '../assets/james.png';
import peter from '../assets/peter.png';

import movie from '../assets/eventMovie.png';
import founderHackPlain from '../assets/founderHackPlain.png';
import orchestra from '../assets/eventOrchestra.png';
import DashboardCard from './DashboardCard';
;
import { Search, MapPin, Calendar, Clock, Tag, X } from 'lucide-react';

const friends = [
    { id: 1, name: 'Alice Johnson', avatar: john },
    { id: 2, name: 'Bob Smith', avatar: james },
    { id: 3, name: 'Charlie Brown', avatar: peter },
  ];

export default function EventDetail() {


    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [toast, setToast] = React.useState(null);
  
    const handleInvite = (friendName) => {
      setToast(`Your invitation to ${friendName} has been sent!`);
      setTimeout(() => setToast(null), 3000); // Hide toast after 3 seconds
    };


  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Header */}
      <header className="flex items-center justify-between mx-3 my-5">
                <img src={unimateLogo} alt="Unimate Logo" className="w-40 h-auto" />
                <nav className='flex justify-between bg-gray-200 rounded-full py-3 pr-4 w-1/2 items-center'>
                    <ul className='flex justify-around w-full font-semibold'>
                        <li>
                            <Link to="/">Home</Link>
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
            </header>

      {/* Main Content */}
      <main className="grid grid-cols-3 gap-8">
        {/* Event Image */}
        <div className="col-span-2">
          <img src={founderHackPlain} alt="FoundersHack 2024" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Event Details */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">FoundersHack 2024</h2>
          <p className="text-gray-600 mb-4">Victoria's largest university startup hackathon.</p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>August 1 - August 4, 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>5:30 PM - 5:00 PM AEST</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>Hybrid – Monash University, RMIT, The University of Melbourne</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Entrepreneurship</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Hackathon</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Innovation</span>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
            Get Tickets - A$5.00
          </button>
        </div>

        {/* Event Description */}
        <div className="col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">About the Event</h2>
          <p className="text-gray-700">
            FoundersHack is a first-of-its-kind, inter-university hackathon designed to give students a practical introduction to startups. Across three days, 
            teams of students from Australia's three largest universities build & pitch a software prototype addressing a real-world challenge.
          </p>
          <p className="text-gray-700">
            FoundersHack is hosted by NextGen Ventures, and the largest technology university clubs across Victoria's top 3 universities: WIRED (Monash), DSCubed (UniMelb) and CSIT (RMIT).
          </p>
          <button className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-300">
            <MapPin className="h-5 w-5" />
            <span>Show in Map</span>
          </button>
        </div>

      {/* Bring a Buddy */}
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <h3 className="text-xl font-semibold mb-2">Bring a Buddy</h3>
        <p className="text-gray-600 mb-4">Invite your friends to join you at the event!</p>
        <button 
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        >
          <span>Bring a Buddy 👋</span>
        </button>

        {/* Popover */}
        {isPopoverOpen && (
          <div className="absolute z-10 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {friends.map((friend) => (
                <div key={friend.id} className="px-4 py-2 flex items-center justify-between hover:bg-gray-100">
                  <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full mr-2" src={friend.avatar} alt={friend.name} />
                    <span>{friend.name}</span>
                  </div>
                  <button 
                    onClick={() => handleInvite(friend.name)}
                    className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full hover:bg-indigo-200"
                  >
                    Invite
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
          <span>{toast}</span>
          <button onClick={() => setToast(null)} className="ml-2">
            <X size={18} />
          </button>
        </div>
      )}
      </main>
    </div>
  );
}