import React from 'react';
import unimateLogo from '../assets/Unimate.png';
import login from '../assets/login.png';
import { Mail } from 'lucide-react';

export default function LogIn() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <img src={unimateLogo} alt="Unimate Logo" className="w-32 h-auto" />
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl w-full space-y-8 flex items-center gap-20">

                    <div className="w-1/2 space-y-6">
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            Start Your <strong className='text-indigo-600 '>Unforgettable</strong> First Year with UniMate.
                        </h1>
                        <p className="text-xl text-gray-600">
                            Connect with peers, discover exciting events, and embrace all that campus life has to offer. 
                            All in one site.
                        </p>
                        <div className="bg-white p-8 rounded-lg space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">Log In with SSO</h2>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="johndoe@student.rmit.edu.au"
                                />
                            </div>
                            <a href='/interest' className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Let's go!
                            </a>
                            <p className="text-sm text-center text-gray-500">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    I don't know my student email
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2 pr-8">
                        <img src={login} alt="Login" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </main>
        </div>
    );
}