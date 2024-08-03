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
import founderHackPlain from '../assets/founderHackPlain.png';
import orchestra from '../assets/eventOrchestra.png';
import DashboardCard from './DashboardCard';
;

export default function EventDetail() {
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

            <div>

                <img src={founderHackPlain} alt="Unimate Logo" className="w-100 h-auto p-10"  />

            </div>

            <div>
                {/* Details */}
                <div>

                </div>

                {/* Ticket with a Popover that can add friends */}
                <div>

                </div>

            </div>

        </>
    )
}