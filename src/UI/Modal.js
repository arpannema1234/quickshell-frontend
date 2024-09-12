import { useState } from "react";
import classes from "./Modal.module.css";
import ErrorPage from "./Error";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showErrorPage, setShowErrorPage] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setShowErrorPage(true);
  };

  if (showErrorPage) {
    return <ErrorPage />;
  }
  // Render the modal if it's open
  if (!isModalOpen) return null;

  return (
    <div className={classes["modal-overlay"]} onClick={closeModal}>
      <div
        className={classes["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <p>Could not fetch data. Please try again later.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
