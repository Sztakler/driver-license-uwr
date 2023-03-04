import React from 'react';

import Heading from '../../atoms/Heading';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

export default function LoginForm() {
  const before = `before:absolute before:-top-2/4 before:-left-2/4 before:min-w-full before:min-h-full
                  before:animate-rotate-slow before:origin-bottom-right
                  before:bg-gradient-0 before:from-transparent before:via-amber-500 before:to-amber-500'`;

  const after = `after:absolute after:top-2/4 after:-right-2/4 after:min-w-full after:min-h-full
                 after:animate-rotate-slow after:origin-top-left
                 after:bg-gradient-0 after:from-amber-500 after:via-amber-500 after:to-transparent`;

  const inputClasses = 'hidden';

  return (
    <div
      className={`relative w-2/6 h-132 rounded-lg overflow-hidden ${before} ${after}`}>
      <div
        className="absolute z-10 inset-1.5 bg-orange-200 rounded-lg
                   flex flex-col items-center justify-center p-6">
        <Heading level={2}>Zaloguj się</Heading>
        <div className="w-full">
          <Label>Login</Label>
          <Input />
        </div>
        <div className="w-full">
          <Label>Hasło</Label>
          <Input type="password" />
        </div>
      </div>
    </div>
  );
}
