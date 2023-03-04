import React from 'react';

export default function PageTemplate({header, content, footer, ...props}) {
  return (
    <div
      className="flex flex-col relative min-h-screen bg-orange-100"
      {...props}>
      <div className="p-10">{header}</div>
      <main className="flex flex-auto w-full items-center justify-center pb-16 mb-16">
        {content}
      </main>
      <footer className="bg-white absolute bottom-0 w-full h-16">
        {footer}
      </footer>
    </div>
  );
}
