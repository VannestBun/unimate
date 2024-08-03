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
            className="relative bg-cover bg-center rounded-xl overflow-hidden p-4"
            style={{ 
                backgroundImage: `url(${backgroundImage})`, 
                width: '100%', 
                maxWidth: '500px',
                height: '300px'
            }}
        >
            <div className="relative h-full flex justify-between text-white items-end">
                <div className='flex items-center gap-2'>
                    <img
                        src={profilePic}
                        alt={name}
                        className="w-20 h-20 rounded-full"
                    />
                    <div>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="text-base max-w-md">{description}</p>
                    </div>
                </div>
                <div>
                    <button
                        className="bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mb-4"
                        onClick={onSayHello}
                    >
                        {renderButtonContent()}
                    </button>
                </div>
            </div>
        </div>
    );

    return link ? (
        <Link to={link} className="block">
            {CardContent}
        </Link>
    ) : (
        CardContent
    );
}

export default DashboardCard;
