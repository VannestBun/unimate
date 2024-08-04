import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import unimateLogo from '../assets/Unimate.png';
import ssoImage from '../assets/ssoLoginImagery.png';
import mailIcon from '../assets/iconMail.png'

import useAuthStore from "../context/authStore";

export default function Login() {
  const [emailState, setEmailState] = useState("");
  
  const setEmailContext = useAuthStore((state) => state.setEmail);
  
  const onEmailChange = (newEmail) => {
    setEmailState(newEmail);
  };

  const onLetsGoSubmit = () => {
    setEmailContext(emailState);
  };

  return (
    <div className="h-screen flex flex-col mx-2 overflow-hidden">
      {/* Logo Section */}
      <div className="flex justify-start w-full p-4">
        <img src={unimateLogo} alt="Unimate Logo" className="w-28 h-auto" />
      </div>

      {/* Content Section */}
      <div className="flex w-full h-full">
        {/* Text Section */}
        <div className="flex-[3] flex items-center justify-center">
          <div className="text-left flex flex-col gap-4 px-8">
            <h1 className="text-5xl font-black tracking-tight leading-tighter">
              Start Your <span className="text-purpleMain">Unforgettable</span> <br />
              First Year with UniMate.
            </h1>
            <p className="text-lg tracking-tight">
              Connect with peers, discover exciting events & <br/>embrace all that campus life has to offer. <br />
              All in one site.
            </p>

            <h2 className="text-xl font-bold tracking-tight mt-6">
              Log In with SSO
            </h2>

            {/* SSO Login Section */}
            <div className="flex items-center bg-gray-100 rounded-full p-2 h-12">
                <img
                    src={mailIcon}
                    alt="Enter Email"
                    className='h-6 w-6 ml-3'
                />
                <input
                    type="email"
                    className="flex-grow bg-transparent text-gray-600 placeholder-gray-900 ml-3 focus:outline-none"
                    placeholder="johndoe@student.rmit.edu.au"
                    value={emailState}
                    onChange={(e) => onEmailChange(e.target.value)}
                />
                <Link to="/interest">
                    <button className="ml-auto bg-indigo-600 text-white font-bold py-2 px-6 rounded-full" onClick={onLetsGoSubmit}>
                    Let’s Go!
                    </button>
                </Link>
            </div>

            <div className=" text-sm text-gray-500 hover:text-gray-700 underline mb-28">
              I don’t know my student email
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-[2]">
          <img
            src={ssoImage}
            alt="UniMate Experience"
            className="object-cover w-full h-full overflow-visible"
          />
        </div>
      </div>
    </div>
  );
}
