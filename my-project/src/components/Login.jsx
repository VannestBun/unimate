import React from 'react';
import { Link } from 'react-router-dom';
import unimateLogo from '../assets/Unimate.png';
import ssoImage from '../assets/ssoLoginImagery.png'

export default function Login() {
  return (
    <div className="h-screen flex flex-col justify-between items-center mx-2">
        {/* Logo Section */}
        <div className="flex justify-start w-full">
            <img src={unimateLogo} alt="Unimate Logo" className="w-28 h-auto" />
        </div>
        
        {/* Context Section */}
        <div className='flex w-full h-full'>
            {/* Text Section */}
            <div className="flex-1 flex items-center justify-center">
            <div className="text-center p-8">
                <h1 className="text-5xl font-extrabold leading-snug">
                Start Your <span className="text-indigo-600">Unforgettable</span> <br />
                First Year with UniMate.
                </h1>
            </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
            <img
                src={ssoImage} 
                alt="UniMate Experience"
                className="h-full"
            />
            </div>
        </div>
    </div>
  );
}
