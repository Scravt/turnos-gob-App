import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl mb-3'>
        Bienvenido al sistema de gestion de turnos y tramites
      </h1>
      <div className='h-1/3 flex flex-col gap-6 '>
        <p>Para comenzar, por favor inicie sesion o registrese</p>
        <NavLink to="/login">Iniciar Sesion</NavLink>
        <NavLink to="/register">Registrarse</NavLink>
      </div>

    </div>
  )
}
