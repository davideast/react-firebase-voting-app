import React from 'react';

function Container({ children }) {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  )
}

export { Container };
