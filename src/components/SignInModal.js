import React from 'react';
import { Modal } from './Modal';

export function SignInModal({ isOpen, setModalOpen }) {
  return (
    <Modal 
      onMaskClick={() => { setModalOpen(false); }}
      isOpen={isOpen}>

      <div className="h-64 flex justify-center items-center bg-white w-full rounded-lg">
        <button className="bg-orange text-white p-4 rounded-lg text-bold">
          SIGN IN AS GUEST
        </button>
      </div>

    </Modal>
  );
}
