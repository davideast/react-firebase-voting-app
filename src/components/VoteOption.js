import React from 'react';

function VoteOption({ option, onClick }) {
  return (
    <button 
      onClick={() => { onClick(option); }}
      className="h-16 w-full border-solid border-orange border-4 flex items-center rounded-md my-4 px-4">
      <span className="text-xl">{option.text}</span>
    </button>
  )
}

export { VoteOption };
