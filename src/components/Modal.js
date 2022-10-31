import React, { useRef } from "react";
import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ open, setOpen, closeOnClick, children }) => {
  const dialogRef = useRef();
  const lastActiveElement = useRef();

  useEffect(() => {
    if (open) {
      lastActiveElement.current = document.activeElement;
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
      lastActiveElement.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    const handleCancel = (event) => {
      event.preventDefault();
      setOpen(false);
    };
    dialogNode.addEventListener("cancel", handleCancel);

    return () => {
      dialogNode.removeEventListener("cancel", handleCancel);
    };
  }, [setOpen]);

  const handleCloseOnClick = (event) => {
    if (closeOnClick && event.target === dialogRef.current) {
      setOpen(false);
    }
  };

  return (
    <dialog ref={dialogRef} onClick={handleCloseOnClick}>
      {children}
    </dialog>
  );
};

export default Modal;
