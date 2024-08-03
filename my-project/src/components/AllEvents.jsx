import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import menu from '../assets/Menu.png';
import guy from '../assets/guy.png';
import unimateLogo from '../assets/Unimate.png';
import ScrollableNav from './ScrollableNav';

import john from '../assets/john.png';
import james from '../assets/james.png';
import peter from '../assets/peter.png';

import movie from '../assets/eventMovie.png';
import founderHack from '../assets/eventFoundersHack.png';
import orchestra from '../assets/eventOrchestra.png';
import DashboardCard from './DashboardCard';

export default function AllEvents() {
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

            <div className='flex justify-between mx-10 mt-10 items-center'>
                <div className='flex items-center'>
                    <h1 className="text-5xl font-semibold mr-2">Explore All Events</h1>
                </div>
            </div>
            <ScrollableNav />

            <div className='flex gap-3 mt-8 justify-center'>
                <DashboardCard
                    profilePic={john}
                    backgroundImage={movie}
                    name="Movie Night"
                    description="Join us for a night of fun and entertainment."
                    link="/eventDetail"
                    buttonContent="🎥 Join Movie Night"
                />
                <DashboardCard
                    profilePic={james}
                    backgroundImage={founderHack}
                    name="Founders Hackathon"
                    description="Collaborate and innovate with fellow founders."
                    link="/eventDetail"
                    buttonContent="💡 Join Hackathon"
                />
                <DashboardCard
                    profilePic={peter}
                    backgroundImage={orchestra}
                    name="Orchestra Performance"
                    description="Experience the magic of live orchestra."
                    link="/eventDetail"
                    buttonContent={<img src={john} alt="Button Image" className="w-6 h-6" />}
                />
            </div>
        </>
    );
}
