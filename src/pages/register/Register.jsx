import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputField from '../../componentes/input/InputField'
import { SubmitButton } from '../../componentes/bottons/SubmitButton'

const Register = () => {
  const formik = useFormik({
    initialValues: {
      correoElectronico: "",
      password: "",
      confirmPassword: "",  // Agregar campo de confirmación
      savePassword: false,
    },
    validationSchema: Yup.object({
      correoElectronico: Yup.string()
        .email("Correo electrónico inválido")
        .required("Campo requerido"),
      password: Yup.string()
        .required("Campo requerido")
        .min(8, "La contraseña debe tener al menos 8 caracteres"), // Agregar una longitud mínima
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Las contraseñas deben coincidir") // Validación para confirmar que las contraseñas coinciden
        .required("Campo requerido"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <section>
        <h1>Registro de usuario</h1>
        <form onSubmit={formik.handleSubmit}>
          <InputField
            label="Correo electrónico"
            type="text"
            name="correoElectronico"
            placeholder="Escriba su correo electrónico"
            value={formik.values.correoElectronico}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.correoElectronico && formik.errors.correoElectronico}
          />
          <InputField
            label="Contraseña"
            type="password"
            name="password"
            placeholder="Escriba su contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />
          <InputField
            label="Confirmación de contraseña"
            type="password"
            name="confirmPassword"  // Cambio el name para que sea diferente
            placeholder="Vuelva a escribir su contraseña"
            value={formik.values.confirmPassword}  // Asegurarse de que esté vinculado a confirmPassword
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <SubmitButton disabled={!formik.isValid || formik.isSubmitting} type="submit">
            Registrarse
          </SubmitButton>
        </form>
      </section>
    </div>
  );
}

export default Register;
