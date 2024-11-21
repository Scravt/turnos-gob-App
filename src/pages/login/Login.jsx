import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NavLink } from 'react-router-dom'
import InputField from '../../componentes/input/InputField'
import { SubmitButton } from '../../componentes/bottons/SubmitButton'
import {CheckboxField} from '../../componentes/input/CheckBoxField'

const Login = () => {
    const formik = useFormik({
        initialValues: {
          correoElectronico: "",
          password: "",
          savePassword: false,
        },
        validationSchema: Yup.object({
          correoElectronico: Yup.string()
            .email("Correo electrónico inválido")
            .required("Campo requerido"),
          password: Yup.string().required("Campo requerido"),
        }),
        onSubmit: (formData) => {
          console.log(formData);
        },
      });
    
      const isFormValid = Object.keys(formik.errors).length === 0;
    
      const admi = false;


    return (
        <div className="flex flex-col  justify-center items-center min-h-screen relative -top-1/4">
        <div className="w-2/3 lg:mt-0 mt-96 lg:w-1/4 lg:gap-24">
          <h1 className="text-4xl text-fluColorPrimary font-fluTitle pb-5">
            Inicio de sesión
          </h1>
          <form onSubmit={formik.handleSubmit} className="flex flex-col lg:gap-4">
            <InputField
              label="Correo electrónico"
              type="text"
              name="correoElectronico"
              placeholder="Escriba su correo electrónico"
              value={formik.values.correoElectronico}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.correoElectronico &&
                formik.errors.correoElectronico
              }
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
            <div className="flex flex-row justify-between mb-7">
              <CheckboxField
                name="savePassword"
                checked={formik.values.savePassword}
                onChange={formik.handleChange}
              />
              {!admi && (
                <NavLink to="/Forgot" className={"underline"}>
                  Olvidé mi contraseña
                </NavLink>
              )}
            </div>
            <SubmitButton isFormValid={isFormValid}>
                Iniciar Sesión
            </SubmitButton>
          </form>
        </div>
        <div>
          <span>¿No tienes Cuenta?</span>{" "}
          <NavLink to="/register" className={"underline"}>
            Regístrate
          </NavLink>
        </div>
      </div>
    )
}

export default Login