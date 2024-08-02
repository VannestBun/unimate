import React from 'react';

function DashboardCard({ backgroundImage, profilePic, name, description, onSayHello }) {
    return (
        <div
            className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg p-5"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col items-center text-white">
                <img
                    src={profilePic}
                    alt={name}
                    className="w-24 h-24 rounded-full border-4 border-white mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-center mb-4">{description}</p>
                <button
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full"
                    onClick={onSayHello}
                >
                    Say Hello
                </button>
            </div>
        </div>
    );
}

export default DashboardCard;
