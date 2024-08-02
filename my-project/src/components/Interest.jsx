import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import unimateLogo from '../assets/Unimate.png';
import progressBar from '../assets/progress.png';
import { Link } from 'react-router-dom';

function InterestTag({ text, onRemove }) {
    return (
        <div className="inline-flex items-center bg-indigo-600 text-white rounded-full px-3 py-1 m-1">
            <span className="text-sm font-medium mr-1">{text}</span>
            <button onClick={() => onRemove(text)} className="focus:outline-none">
                <X size={14} />
            </button>
        </div>
    );
}

function InterestCard({ text, onClick, showIcon = true }) {
    return (
        <div 
            className="inline-flex items-center bg-gray-500 text-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-indigo-800 transition-colors duration-200 m-1"
            onClick={() => onClick(text)}
        >
            {showIcon && <Plus size={16} className="mr-1" />}
            <span className="text-base font-light">{text}</span>
        </div>
    );
}

export default function Interest() {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const availableInterests = [
        'Computing', 'Data Science', 'Architecture', 'Music', 'Pottery', 
        'Basketball', 'Soccer', 'Cultural Studies', 'Japanese Food', 'Dance', 'Cybersecurity',
        'Artificial Intelligence (AI)', 'Blockchain', 'Philosophy', 'Mathematics', 'Physics',
        'Economics', 'Public Health', 'Anime', 'Fashion Design', 'Movies' 
    ];

    const handleInterestClick = (interest) => {
        if (!selectedInterests.includes(interest) && selectedInterests.length < 5) {
            setSelectedInterests(prev => [...prev, interest]);
        }
    };

    const handleRemoveInterest = (interest) => {
        setSelectedInterests(prev => prev.filter(i => i !== interest));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '' && selectedInterests.length < 5) {
            handleInterestClick(inputValue.trim());
            setInputValue('');
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', selectedInterests);
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="flex mb-28">
                    <img src={unimateLogo} alt="Unimate Logo" className="w-40 h-auto" />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-8xl font-extrabold">What are you interested in?</h1>
                </div>

                <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto mb-8">
                    <div className="relative bg-white border border-gray-300 rounded-full p-2 flex flex-wrap items-center">
                        {selectedInterests.map((interest, index) => (
                            <InterestTag key={index} text={interest} onRemove={handleRemoveInterest} />
                        ))}
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleInputKeyDown}
                            placeholder={selectedInterests.length === 0 ? "Search your interests..." : ""}
                            className="flex-grow py-1 px-3 bg-transparent focus:outline-none"
                            disabled={selectedInterests.length >= 5}
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                        >
                            <Search size={20} />
                        </button>
                    </div>
                </form>

                <div className="text-center w-1/2 mx-auto mt-20">
                    {availableInterests.filter(interest => !selectedInterests.includes(interest)).map((interest, index) => (
                        <InterestCard key={index} text={interest} onClick={handleInterestClick} />
                    ))}
                </div>

                <div className='text-center mt-2'>
                    <h1 className='text-gray-400'>{selectedInterests.length}/5 selected</h1>
                    {selectedInterests.length >= 5 && (
                        <p className='text-red-600'>You may only choose 5 interests.</p>
                    )}
                </div>

                <div className='flex justify-between items-center mt-20'>
                    <div 
                        className="inline-flex items-center bg-indigo-600 text-white rounded-full px-14 py-3 cursor-pointer hover:bg-indigo-800 transition-colors duration-200 m-1 mr-5"
                    >
                         <Link to="/" className='text-lg font-base'> ← back</Link>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img src={progressBar} alt="Progress Bar" className="h-auto" />
                    </div>

                    <div 
                        className="inline-flex items-center bg-indigo-600 text-white rounded-full px-8 py-3 cursor-pointer hover:bg-indigo-800 transition-colors duration-200 m-1 ml-5"
                    >
                        <Link to="/dashboard" className='text-lg font-base'> Let's Get started →</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
