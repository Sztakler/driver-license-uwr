import React from 'react';

import {useNavigate} from 'react-router';

export default function NavigationLogo({text, image, navigationTarget}) {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate(navigationTarget);
  };

  let displayedComponent = <span>Provide text or image path in props</span>;
  if (text) {
    displayedComponent = <span className="text-xl text-gray-700">{text}</span>;
  } else if (image) {
    displayedComponent = <img className="w-10 h-auto" src={image} />;
  }

  return (
    <button
      onClick={navigateToHomePage}
      className="py-3 px-6 rounded-half border border-solid border-black bg-white hover:bg-gray-200">
      {displayedComponent}
    </button>
  );
}
