"use server"
import React from 'react'

export default function AddRides() {
  const handleSubmit = () => {

  }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="date">Enter date</label>
        <input type="text" name="date" id="date" placeholder='Enter date'></input>
    </form>
  )
}
