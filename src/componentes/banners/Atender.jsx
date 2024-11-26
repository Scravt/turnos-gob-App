import React from 'react'
import calenderIcon from '../../assets/calenderIcon.svg'
import BannerERBig from './BannerERBig'

const Atender = () => {
  return (
    <div>
        <h1>
            Atend<span>ER</span>
        </h1>
        <section>
            <img src={calenderIcon} alt="calender icon" />
            
            <p>
                Sistema de Creacion
                y reserva de turnos para
                la atencion ciudadana
            </p>
        </section>
        <BannerERBig/>

    </div>
  )
}

export default Atender