import React from 'react'

export default function RestaurantCard({ name, cuisine, rating, time, cost }) {
  return (
    <article className="card">
      <div className="card-media">🍕</div>
      <div className="card-body">
        <h3>{name}</h3>
        <p className="muted">{cuisine}</p>
        <div className="card-meta">
          <span className="badge">{rating} ★</span>
          <span>{time}</span>
          <span className="muted">{cost}</span>
        </div>
      </div>
    </article>
  )
}
