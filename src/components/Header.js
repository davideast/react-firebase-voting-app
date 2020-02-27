import React from 'react';

function Header({ theme }) {
  return (
    <header className="h-16 font-bold text-5xl">
      <h1>
        voting
        </h1>
      <div style={{ height: '6px' }} className="w-full bg-white"></div>
    </header>
  );
}

export { Header };
