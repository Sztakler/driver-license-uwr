import React from 'react';

import NavigationButton from '../../molecules/NavigationButton';
import NavigationLogo from '../../molecules/NavigationLogo';

import userLogo from '../../../../../../src/assets/images/user-logo.png';

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex justify-center items-center">
        <NavigationLogo text="Superlogo" navigationTarget="/" />
      </div>
      <div>
        <div className="flex flex-row gap-4">
          <NavigationButton text="Egzamin" navigationTarget="/exam" />
          <NavigationButton text="Nauka" navigationTarget="/learning" />
          <NavigationButton text="Kontakt" navigationTarget="/contact" />
          <NavigationButton image={userLogo} navigationTarget="/login" />
        </div>
      </div>
    </div>
  );
}
