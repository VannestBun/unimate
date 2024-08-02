import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import unimateLogo from '../assets/Unimate.png';
import progressBar from '../assets/progress.png'
import { Link } from 'react-router-dom';


export default function Dashboard() {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const availableInterests = ['Technology', 'Art', 'Science', 'Music', 'Sports', 'Travel'];

    const handleInterestClick = (interest) => {
        if (!selectedInterests.includes(interest)) {
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
        if (e.key === 'Enter' && inputValue.trim() !== '') {
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
        DASHBOARD

        </>
    );
}