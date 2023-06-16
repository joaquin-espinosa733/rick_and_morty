import React from 'react'
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <div>
        <label htmlFor="">Password:</label>
        <input type="text" />

        <Link to="/">
        <button>Ingresar</button>
        </Link>
    </div>
  )
}
