import React from 'react';
import unimateLogo from '../assets/Unimate.png';
import sparkle from '../assets/sparkle.png';
import menu from '../assets/Menu.png';
import guy from '../assets/guy.png';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import DashboardCard from './DashboardCard';

function SearchInput() {
    return (
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
            <Search size={20} className="text-gray-600 mr-2" />
            <input
                type="text"
                placeholder="describe your ideal friend"
                className="flex-grow bg-transparent focus:outline-none text-gray-700 min-w-[250px]"
            />
        </div>
    );
}

export default function Dashboard() {
    return (
        <>
            <div className="flex items-center justify-between mx-3 my-5">
                <img src={unimateLogo} alt="Unimate Logo" className="w-40 h-auto" />
                <nav className='flex justify-between bg-gray-200 rounded-full py-3 pr-4 w-1/2 items-center'>
                    <ul className='flex justify-around w-full font-semibold'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/interest">Your Friends</Link>
                        </li>
                        <li>
                            <Link to="/events">Your Events</Link>
                        </li>
                    </ul>
                    <Search size={35} className="text-white bg-indigo-700 rounded-full p-2" />
                </nav>
                <div className='flex bg-gray-100 p-3 rounded-full'>
                    <img src={menu} alt="menu" className="w-10 h-auto" />
                    <img src={guy} alt="guy" className="w-10 h-auto" />
                </div>
            </div>

            <div className='flex justify-between mx-10 my-10 items-center'>
                <div className='flex items-center'>
                    <h1 className="text-2xl font-semibold mr-2">Friends for you</h1>
                    <img src={sparkle} alt="sparkle" className="w-10 h-auto" />
                </div>
                <SearchInput />
            </div>

            <div className="p-10">
            <DashboardCard
                backgroundImage={unimateLogo}
                name="John Doe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>
        </>
    );
}
