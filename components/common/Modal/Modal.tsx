import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import s from './Modal.module.css';
import IconClose from '../../icons/IconClose';

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <div className={s.modalHeader}>
          <button onClick={handleCloseClick} className={s.closeButton}>
            <IconClose className={s.iconClose}/>
          </button>
        </div>
        <div className={s.modalBody}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;