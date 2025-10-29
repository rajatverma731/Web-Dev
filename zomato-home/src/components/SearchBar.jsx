import React, { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <div className="searchbar">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for restaurants, cuisines or dishes"
        aria-label="search"
      />
      <button onClick={() => alert('Search for: ' + (query || 'all'))}>Search</button>
    </div>
  )
}
