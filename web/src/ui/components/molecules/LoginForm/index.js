import React from 'react';

import Heading from '../../atoms/Heading';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

export default function LoginForm(props) {
  return (
    <div
      className="h-full w-1/2 rounded-3xl 
						 flex flex-col items-center justify-center p-6">
      <Heading level={2}>Zaloguj się</Heading>
      <div className="w-full">
        <Label size="2xl">Login</Label>
        <Input primary />
      </div>
      <div className="w-full">
        <Label size="2xl">Hasło</Label>
        <Input type="password" primary />
      </div>
    </div>
  );
}
