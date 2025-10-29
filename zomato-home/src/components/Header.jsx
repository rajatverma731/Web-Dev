import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">Zomo<span>Clone</span></div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Offers</a>
        <a href="#">Profile</a>
      </nav>
    </header>
  )
}
