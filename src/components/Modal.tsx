import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
  height?: number;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  width = 600,
  height = 400,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="relative"
        style={{
          width: `${width}px`,
          maxHeight: `${height}px`,
          borderRadius: "12px" /* Bordes redondeados */,
          overflow: "hidden" /* Solución para mantener bordes */,
          background: "#fff" /* Fondo del modal */,
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-6 text-gray-500 hover:text-gray-800"
          aria-label="Cerrar modal"
        >
          ✕
        </button>
        <div
          style={{
            maxHeight: `${height}px`,
            overflowY: "auto" /* Scroll vertical solo para contenido */,
            padding: "1.5rem",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
