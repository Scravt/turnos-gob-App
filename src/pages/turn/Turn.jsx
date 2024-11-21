import React from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'

const Turn = () => {
  const localizer = dayjsLocalizer(dayjs)
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='h-1/3 w-1/2'>
        <Calendar
          localizer={localizer}
        />
      </div>


    </div>
  )
}

export default Turn