type ConfirmationModalProps = {
  title: string;
  nombreComercial: string;
  identificacionTributaria: string;
  onConfirm: () => Promise<void> | void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  nombreComercial,
  identificacionTributaria,
  onConfirm,
  onCancel,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-red-500">{title}</h2>
      <p>
        ¿Estás seguro de querer eliminar al proveedor{" "}
        <strong>{nombreComercial}</strong> con identificación{" "}
        <strong>{identificacionTributaria}</strong>?
      </p>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded-md mr-2"
        >
          {cancelText}
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
