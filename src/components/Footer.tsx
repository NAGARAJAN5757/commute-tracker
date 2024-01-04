import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='h-[10dvh] flex justify-center items-center'>
      &copy; Commute Tracker {year}
    </div>
  )
}
