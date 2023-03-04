import React from 'react';

export default function HomeContent() {
  return (
    <div className="container flex p-10 h-full items-center justify-center flex-col gap-32">
      <section className="flex flex-col w-full items-center justify-center gap-12">
        <span className="text-4xl">JESTESMY PROFESJONALNI SERIO</span>
        <span className="text-8xl">Egzaminy na prawko</span>
      </section>
      <div>
        <img
          src={require('../../../../../../../src/assets/images/car.png')}
          className="h-56 w-auto"
        />
      </div>
    </div>
  );
}