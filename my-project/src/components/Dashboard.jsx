import React, { useRef, useEffect } from 'react';
import unimateLogo from '../assets/Unimate.png';
import tagAnime from '../assets/tagAnime.png';
import tagArchitecture from '../assets/tagArchitecture.png';
import tagFootball from '../assets/tagFootball.png';
import sparkle from '../assets/sparkle.png';
import menu from '../assets/Menu.png';
import guy from '../assets/guy.png';
import john from '../assets/john.png';
import james from '../assets/james.png';
import peter from '../assets/peter.png';
import movie from '../assets/eventMovie.png';
import founderHack from '../assets/eventFoundersHack.png';
import orchestra from '../assets/eventOrchestra.png';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import DashboardCard from './DashboardCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollableNav from './ScrollableNav';

function SearchInput() {
    return (
        <div className="flex items-center rounded-full px-4 py-2 bg-gray-100">
            <Search size={20} className="text-gray-700 mr-2" />
            <input
                type="text"
                placeholder="Describe your ideal friend ..."
                className="flex-grow bg-transparent focus:outline-none text-gray-700 min-w-[250px]"
            />
        </div>
    );
}

export default function Dashboard() {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleScroll = (event) => {
        if (sliderRef.current) {
            const scrollDirection = event.deltaY > 0 ? 'next' : 'prev';
            if (scrollDirection === 'next') {
                sliderRef.current.slickNext();
            } else {
                sliderRef.current.slickPrev();
            }
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

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
                            <Link to="/friendChat">Your Friends</Link>
                        </li>
                        <li>
                            <Link to="/Dashboard">Your Events</Link>
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
                    <h1 className="text-5xl font-semibold mr-2">Friends for you</h1>
                    <img src={sparkle} alt="sparkle" className="w-10 h-auto" />
                </div>
                <SearchInput />
            </div>

            <div className="p-4 md:p-10">
                <Slider {...settings} ref={sliderRef}>
                    <div className="px-2">
                        <DashboardCard
                            profilePic={john}
                            backgroundImage={tagAnime}
                            name="John Doe"
                            description="I like food"
                        />
                    </div>
                    <div className="px-2">
                        <DashboardCard
                            profilePic={james}
                            backgroundImage={tagFootball}
                            name="John Doe"
                            description="I like food"
                        />
                    </div>
                    <div className="px-2">
                        <DashboardCard
                            profilePic={peter}
                            backgroundImage={tagArchitecture}
                            name="John Doe"
                            description="I like food"
                        />
                    </div>
                </Slider>

                <div className='flex items-center mt-10 justify-between'>
                    <div className='flex items-center'>
                        <h1 className="text-5xl font-semibold mr-2">Upcoming Events for you</h1>
                        <img src={sparkle} alt="sparkle" className="w-10 h-auto" />
                    </div>
                    <Link to="/allEvents" className='bg-indigo-600 text-white py-4 px-8 rounded-full'>See All</Link>
                </div>

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
                    name="Orchestra"
                    description="Experience the best classical orchestra."
                    link="/eventDetail"
                    buttonContent="Join Orchestra"
                />
            </div>
            </div>
        </>
    );
}
