import React from 'react';

function BetweenSection({ children }) {
  return (
    <div className="px-2 flex items-center justify-between">
      {children}
    </div>
  )
}

export { BetweenSection };
