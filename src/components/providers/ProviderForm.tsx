import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Provider } from "../../utils/types";

type ProviderFormProps = {
  initialValues?: Provider;
  onClose: () => void; // Función para cerrar el modal
  onSubmit: (formData: any) => void; // Callback para manejar el envío
};

const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

// Esquema de validación con Yup
const validationSchema = Yup.object({
  razonSocial: Yup.string().required("Razón social es requerida."),
  nombreComercial: Yup.string().required("Nombre comercial es requerido."),
  identificacionTributaria: Yup.string()
    .length(11, "Debe tener 11 dígitos.")
    .required("Identificación tributaria es requerida."),
  numeroTelefonico: Yup.string().required("Teléfono es requerido."),
  correoElectronico: Yup.string()
    .email("correoElectronico no válido.")
    .required("correoElectronico es requerido."),
  sitioWeb: Yup.string().matches(re, "Debe ser una URL válida."),
  direccionFisica: Yup.string().required("Dirección es requerida."),
  pais: Yup.string().required("Seleccione un país."),
  facturacionAnual: Yup.number()
    .positive("Debe ser un número positivo.")
    .required("Facturación anual es requerida."),
});

const ProviderForm: React.FC<ProviderFormProps> = ({
  initialValues,
  onClose,
  onSubmit,
}) => {
  const formik = useFormik({
    initialValues: initialValues || {
      razonSocial: "",
      nombreComercial: "",
      identificacionTributaria: "",
      numeroTelefonico: "",
      correoElectronico: "",
      sitioWeb: "",
      direccionFisica: "",
      pais: "",
      facturacionAnual: 0,
      fechaUltimaEdicion: new Date().toISOString(), // Fecha actual
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values); // Callback al enviar el formulario
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {/* Razón Social */}
      <div>
        <label htmlFor="razonSocial" className="block text-sm font-medium">
          Razón Social
        </label>
        <input
          id="razonSocial"
          type="text"
          name="razonSocial"
          value={formik.values.razonSocial}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.razonSocial && formik.errors.razonSocial
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.razonSocial && formik.errors.razonSocial && (
          <p className="text-red-500 text-sm">{formik.errors.razonSocial}</p>
        )}
      </div>

      {/* Nombre Comercial */}
      <div>
        <label htmlFor="nombreComercial" className="block text-sm font-medium">
          Nombre Comercial
        </label>
        <input
          id="nombreComercial"
          type="text"
          name="nombreComercial"
          value={formik.values.nombreComercial}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.nombreComercial && formik.errors.nombreComercial
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.nombreComercial && formik.errors.nombreComercial && (
          <p className="text-red-500 text-sm">
            {formik.errors.nombreComercial}
          </p>
        )}
      </div>

      {/* Identificación Tributaria */}
      <div>
        <label
          htmlFor="identificacionTributaria"
          className="block text-sm font-medium"
        >
          Identificación Tributaria
        </label>
        <input
          id="identificacionTributaria"
          type="text"
          name="identificacionTributaria"
          value={formik.values.identificacionTributaria}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.identificacionTributaria &&
            formik.errors.identificacionTributaria
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.identificacionTributaria &&
          formik.errors.identificacionTributaria && (
            <p className="text-red-500 text-sm">
              {formik.errors.identificacionTributaria}
            </p>
          )}
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="numeroTelefonico" className="block text-sm font-medium">
          Teléfono
        </label>
        <input
          id="numeroTelefonico"
          type="tel"
          name="numeroTelefonico"
          value={formik.values.numeroTelefonico}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.numeroTelefonico && formik.errors.numeroTelefonico
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.numeroTelefonico && formik.errors.numeroTelefonico && (
          <p className="text-red-500 text-sm">
            {formik.errors.numeroTelefonico}
          </p>
        )}
      </div>

      {/* correoElectronico Electrónico */}
      <div>
        <label
          htmlFor="correoElectronico"
          className="block text-sm font-medium"
        >
          correoElectronico Electrónico
        </label>
        <input
          id="correoElectronico"
          type="email"
          name="correoElectronico"
          value={formik.values.correoElectronico}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.correoElectronico && formik.errors.correoElectronico
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.correoElectronico &&
          formik.errors.correoElectronico && (
            <p className="text-red-500 text-sm">
              {formik.errors.correoElectronico}
            </p>
          )}
      </div>

      {/* Sitio Web */}
      <div>
        <label htmlFor="sitioWeb" className="block text-sm font-medium">
          Sitio Web
        </label>
        <input
          id="sitioWeb"
          type="text"
          name="sitioWeb"
          value={formik.values.sitioWeb}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.sitioWeb && formik.errors.sitioWeb
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.sitioWeb && formik.errors.sitioWeb && (
          <p className="text-red-500 text-sm">{formik.errors.sitioWeb}</p>
        )}
      </div>

      {/* Dirección */}
      <div>
        <label htmlFor="direccionFisica" className="block text-sm font-medium">
          Dirección
        </label>
        <input
          id="direccionFisica"
          type="text"
          name="direccionFisica"
          value={formik.values.direccionFisica}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.direccionFisica && formik.errors.direccionFisica
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.direccionFisica && formik.errors.direccionFisica && (
          <p className="text-red-500 text-sm">
            {formik.errors.direccionFisica}
          </p>
        )}
      </div>

      {/* País */}
      <div>
        <label htmlFor="pais" className="block text-sm font-medium">
          País
        </label>
        <select
          id="pais"
          name="pais"
          value={formik.values.pais}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.pais && formik.errors.pais ? "border-red-500" : ""
          }`}
        >
          <option value="">Seleccione un país</option>
          <option value="Perú">Perú</option>
          <option value="Chile">Chile</option>
          <option value="Argentina">Argentina</option>
        </select>
        {formik.touched.pais && formik.errors.pais && (
          <p className="text-red-500 text-sm">{formik.errors.pais}</p>
        )}
      </div>

      {/* Facturación Anual */}
      <div>
        <label htmlFor="facturacionAnual" className="block text-sm font-medium">
          Facturación Anual
        </label>
        <input
          id="facturacionAnual"
          type="number"
          name="facturacionAnual"
          value={formik.values.facturacionAnual}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            formik.touched.facturacionAnual && formik.errors.facturacionAnual
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.facturacionAnual && formik.errors.facturacionAnual && (
          <p className="text-red-500 text-sm">
            {formik.errors.facturacionAnual}
          </p>
        )}
      </div>

      {/* Botón Guardar */}
      <button
        type="submit"
        className={`w-full py-2 rounded-md text-white ${
          formik.isValid && !formik.isSubmitting
            ? "bg-primary-800 hover:bg-primary-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!formik.isValid || formik.isSubmitting}
      >
        {formik.isSubmitting ? "Guardando..." : "Guardar Proveedor"}
      </button>
    </form>
  );
};

export default ProviderForm;
