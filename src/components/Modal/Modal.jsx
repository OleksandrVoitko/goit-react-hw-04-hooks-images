import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalImg } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, largeImg }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") onClose();
  };

  const handleClickBackdrop = (event) => {
    if (event.currentTarget === event.target) onClose();
  };

  return createPortal(
    <Overlay onClick={handleClickBackdrop}>
      <ModalImg>
        <img src={largeImg} alt="" />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
}
