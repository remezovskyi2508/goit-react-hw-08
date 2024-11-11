import React from 'react';
import css from './DeleteModal.module.css';

const DeleteModal = (isClose, isAccept) => {
  return (
    <dialog>
      <p>Are you sure you want to delete this contact?</p>
      <div className={css.actions}>
        <button className={css.btn} onClick={isAccept}>
          Да
        </button>
        <button className={css.btn} onClick={isClose}>
          Нет
        </button>
      </div>
    </dialog>
  );
};

export default DeleteModal;
