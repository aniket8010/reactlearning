import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {
  const navigate = useNavigate()
  function GoBackHandler() {
    navigate(-1)
  }
  return (
    <div>
      <h4>I am Contact</h4>
      <button onClick={GoBackHandler} type="button" class="btn btn-outline-info">Go back</button>
    </div>
  )
}
