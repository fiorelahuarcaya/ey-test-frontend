import { useFormik } from "formik";
import * as Yup from "yup";
import { signUp } from "../services/auth";
import Menu from "../components/Menu";

const SignUp = () => {
  const validationSchema = Yup.object({
    nombres: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras y espacios.")
      .required("Los nombres son requeridos."),
    apellidos: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras y espacios.")
      .required("Los apellidos son requeridos."),
    correo: Yup.string()
      .email("Debe ser un correo válido.")
      .required("El correo es requerido."),
    contrasenia: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres.")
      .matches(/\d/, "La contraseña debe contener al menos un número.")
      .required("La contraseña es requerida."),
  });

  const formik = useFormik({
    initialValues: {
      nombres: "",
      apellidos: "",
      correo: "",
      contrasenia: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const result = await signUp(values);

      if (result) {
        window.location.href = "/login";
      }
    },
  });

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50">
      <Menu />
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Registro de Usuario
          </h2>
          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            {/* Nombres */}
            <div className="flex flex-col items-start">
              <label htmlFor="nombres" className="mb-2 text-sm text-gray-600">
                Nombres
              </label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                placeholder="Ingresa tus nombres"
                value={formik.values.nombres}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`p-3 w-full rounded border ${
                  formik.touched.nombres && formik.errors.nombres
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {formik.touched.nombres && formik.errors.nombres && (
                <p className="text-red-500 text-sm">{formik.errors.nombres}</p>
              )}
            </div>

            {/* Apellidos */}
            <div className="flex flex-col items-start">
              <label htmlFor="apellidos" className="mb-2 text-sm text-gray-600">
                Apellidos
              </label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Ingresa tus apellidos"
                value={formik.values.apellidos}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`p-3 w-full rounded border ${
                  formik.touched.apellidos && formik.errors.apellidos
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {formik.touched.apellidos && formik.errors.apellidos && (
                <p className="text-red-500 text-sm">
                  {formik.errors.apellidos}
                </p>
              )}
            </div>

            {/* Correo */}
            <div className="flex flex-col items-start">
              <label htmlFor="correo" className="mb-2 text-sm text-gray-600">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="Ingresa tu correo"
                value={formik.values.correo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`p-3 w-full rounded border ${
                  formik.touched.correo && formik.errors.correo
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {formik.touched.correo && formik.errors.correo && (
                <p className="text-red-500 text-sm">{formik.errors.correo}</p>
              )}
            </div>

            {/* Contraseña */}
            <div className="flex flex-col items-start">
              <label
                htmlFor="contrasenia"
                className="mb-2 text-sm text-gray-600"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="contrasenia"
                name="contrasenia"
                placeholder="Ingresa tu contraseña"
                value={formik.values.contrasenia}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`p-3 w-full rounded border ${
                  formik.touched.contrasenia && formik.errors.contrasenia
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {formik.touched.contrasenia && formik.errors.contrasenia && (
                <p className="text-red-500 text-sm">
                  {formik.errors.contrasenia}
                </p>
              )}
            </div>

            {/* Botón */}
            <button
              type="submit"
              className={`p-3 rounded transition-all font-medium text-white ${
                formik.isValid && !formik.isSubmitting
                  ? "bg-primary-700 hover:bg-primary-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? "Registrando..." : "Registrarse"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
