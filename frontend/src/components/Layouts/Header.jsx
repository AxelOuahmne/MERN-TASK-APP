import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>MERN CRUD APP</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.path ==='/'?'active':''}`} aria-current="page" to="/"><i className='fas fa-home'></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.path ==='/create'?'active':''}`} to='/create'> <i className="fas fa-pencil"></i> Create</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
