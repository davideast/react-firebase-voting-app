import React from 'react';

function Modal({ children, isOpen, onMaskClick }) {

  isOpen = isOpen || false;

  // set a prop for open/closed state that changes
  // the opacity and zIndex
  const closedState = {
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: '-1',
    opacity: '0'
  };

  const openState = {
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: '10',
    opacity: '1'    
  };

  const currentState = isOpen ? openState : closedState;

  return (
    <div
      onClick={onMaskClick}
      style={currentState}
      className="modal-bg transition-opacity duration-500 pt-16 absolute w-full h-full top-0 left-0 overflow-auto flex">
      <div
        onClick={event => { 
          // allows click only for mask
          event.stopPropagation();
        }} 
        className="modal-content relative m-auto bg-white text-black w-4/5 shadow-lg">
        {children}
      </div>
    </div>
  )
}

export { Modal };
