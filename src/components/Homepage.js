import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [name, setName] = useState('');
  const [selectedFavorite, setSelectedFavorite] = useState('');
  const navigate = useNavigate();

  const favorites = [
    'Seer Ruud Van Nisteroy',
    'Nne Polinpo', 
    'Kcee',
    'Aunty Kaffy'
  ];

  const createSnowflakes = () => {
    const snowflakes = [];
    for (let i = 0; i < 50; i++) {
      snowflakes.push(
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 10 + 10}px`
          }}
        >
          ❄
        </div>
      );
    }
    return snowflakes;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalName = selectedFavorite || name;
    
    const routes = {
      'Seer Ruud Van Nisteroy': '/seer-ruud',
      'Nne Polinpo': '/nne-polinpo',
      'Kcee': '/kcee',
      'Aunty Kaffy': '/aunty-kaffy',
      'Juliana': '/juliana',
      'Tiwa': '/tiwa'
    };
    
    const nameMap = {
      'juliana': '/juliana',
      'kcee': '/kcee',
      'seer ruud van nisteroy': '/seer-ruud',
      'nne polinpo': '/nne-polinpo',
      'aunty kaffy': '/aunty-kaffy'
    };
    
    if (finalName.trim()) {
      const route = routes[finalName] || nameMap[finalName.toLowerCase().trim()];
      if (route) {
        navigate(route);
      } else {
        alert('Sorry, no Christmas page found for "' + finalName + '". Please select from the favorites or check your spelling! 🎄');
      }
    }
  };

  const handleFavoriteChange = (e) => {
    setSelectedFavorite(e.target.value);
    if (e.target.value) {
      setName('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value) {
      setSelectedFavorite('');
    }
  };

  return (
    <div className="homepage">
      <div className="snowflakes">
        {createSnowflakes()}
      </div>
      
      <div className="christmas-header">
        <h1 className="main-title">Christmas Appreciation</h1>
        <div style={{ fontSize: '3rem', margin: '1rem 0' }}>🎄</div>
        <p className="subtitle">Spreading Christmas Joy & Love ✨</p>
        <div className="christmas-icons">
          🎅 🤶 🎁 ⭐ 🔔 🕯️
        </div>
      </div>

      <div className="input-section">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="favorites">Choose from Favorites:</label>
            <select 
              id="favorites"
              className="favorites-select"
              value={selectedFavorite}
              onChange={handleFavoriteChange}
            >
              <option value="">-- Select a favorite person --</option>
              {favorites.map((fav, index) => (
                <option key={index} value={fav}>{fav}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="name">Or Enter Your Name:</label>
            <input
              type="text"
              id="name"
              className="name-input"
              value={name}
              onChange={handleNameChange}
              placeholder="Type your name here..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={!name.trim() && !selectedFavorite}
          >
            🎄 Enter Christmas Magic 🎄
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;