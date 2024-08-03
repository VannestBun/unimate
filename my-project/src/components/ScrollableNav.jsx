import React from 'react';
import { Link } from 'react-router-dom';
import './CustomCarousel.css'; // Adjust the path according to your project structure
import { Martini, Code, Paintbrush, Users, Film, Palette, Music } from 'lucide-react';

export default function ScrollableNav() {
    return (
        <div className='flex overflow-x-auto whitespace-nowrap py-3 px-2 scrollable-nav mx-5 my-5'>
            <nav className='flex flex-none justify-between bg-gray-200 rounded-full py-3 px-20 mx-2 items-center'>
                <ul className='flex justify-around w-full gap-4 font-base text-gray-600'>
                    <li className='flex items-center gap-2'>
                        <Martini size={15} />
                        <Link to="/allEvents">Food & Drinks</Link>
                    </li>
                </ul>
            </nav>
            <nav className='flex flex-none justify-between bg-gray-200 rounded-full py-3 px-20 mx-2 items-center'>
                <ul className='flex justify-around w-full gap-4 font-base text-gray-600'>
                    <li className='flex items-center gap-2'>
                        <Code size={15} />
                        <Link to="/allEvents">Tech & Coding</Link>
                    </li>
                </ul>
            </nav>
            <nav className='flex flex-none justify-between bg-gray-200 rounded-full py-3 px-20 mx-2 items-center'>
                <ul className='flex justify-around w-full gap-4 font-base text-gray-600'>
                    <li className='flex items-center gap-2'>
                        <Paintbrush size={15} />
                        <Link to="/allEvents">Creativity</Link>
                    </li>
                </ul>
            </nav>
            <nav className='flex flex-none justify-between bg-gray-200 rounded-full py-3 px-20 mx-2 items-center'>
                <ul className='flex justify-around w-full gap-4 font-base text-gray-600'>
                    <li className='flex items-center gap-2'>
                        <Users size={15} />
                        <Link to="/sallEvents">Social Fun</Link>
                    </li>
                </ul>
            </nav>
            <nav className='flex flex-none justify-between bg-gray-200 rounded-full py-3 px-20 mx-2 items-center'>
                <ul className='flex justify-around w-full gap-4 font-base text-gray-600'>
                    <li className='flex items-center gap-2'>
                        <Film size={15} />
                        <Link to="/allEvents">Movies</Link>
                    </li>
                </ul>
            </nav>
            <nav className='flex flex-none justify-between bg-gray-200 rounded-full py-3 px-20 mx-2 items-center'>
                <ul className='flex justify-around w-full gap-4 font-base text-gray-600'>
                    <li className='flex items-center gap-2'>
                        <Palette size={15} />
                        <Link to="/allEvents">Arts</Link>
                    </li>
                </ul>
            </nav>
            <nav className='flex flex-none justify-between bg-gray-200 rounded-full py-3 px-20 mx-2 items-center'>
                <ul className='flex justify-around w-full gap-4 font-base text-gray-600'>
                    <li className='flex items-center gap-2'>
                        <Music size={15} />
                        <Link to="/allEvents">Dancing</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
