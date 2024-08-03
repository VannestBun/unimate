import React from 'react';
import { Link } from 'react-router-dom';

function DashboardCard({ backgroundImage, profilePic, name, description, onSayHello, link, buttonContent }) {
    const renderButtonContent = () => {
        if (typeof buttonContent === 'string') {
            return buttonContent;
        } else if (React.isValidElement(buttonContent)) {
            return buttonContent;
        } else if (typeof buttonContent === 'object' && buttonContent !== null && buttonContent.type) {
            return React.cloneElement(buttonContent);
        } else {
            return '👋🏼 Say Hello';
        }
    };

    const CardContent = (
        <div
            className="relative bg-cover bg-center rounded-xl overflow-hidden p-4 w-full h-[200px] sm:h-[250px] md:h-[300px] transition-all duration-300 ease-in-out hover:shadow-lg"
            style={{ 
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="relative h-full flex justify-between text-white">
                <div className='flex gap-2 items-end'>
                    <img
                        src={profilePic}
                        alt={name}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                        <h2 className="text-lg sm:text-xl font-bold truncate">{name}</h2>
                        <p className="text-sm sm:text-base line-clamp-2 max-w-[calc(100%-1rem)]">{description}</p>
                    </div>
                </div>
                <div className="self-end mt-2">
                    <button
                        className="bg-indigo-600 hover:bg-indigo-800 text-white text-xs sm:text-sm font-bold py-1 px-3 sm:py-2 sm:px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={onSayHello}
                    >
                        {renderButtonContent()}
                    </button>
                </div>
            </div>
        </div>
    );

    return link ? (
        <Link to={link} className="block w-full">
            {CardContent}
        </Link>
    ) : (
        CardContent
    );
}

export default DashboardCard;