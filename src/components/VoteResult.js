import React from 'react';

function VoteResult({ text, percentage, selected }) {
  let selectedColor = '';
  if(selected) {
    selectedColor = 'rgba(255, 139, 30, .2)';
  }
  return (
    <div
      style={{ backgroundColor: selectedColor }} 
      className="flex items-center justify-between px-2 rounded-md">
      <div style={{ width: percentage }} className="h-16 bg-orange flex items-center rounded-md my-4 px-4">
        <span className="text-white text-xl absolute">{text}</span>
      </div>
      <div>
        <span className="font-mono text-xl px-4">{percentage}</span>
      </div>
    </div>
  )
}

export { VoteResult };
