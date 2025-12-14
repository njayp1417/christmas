import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JulianaPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="person-page">
      <h1 className="person-title">Juliana</h1>
      <div style={{ fontSize: '3rem', margin: '1rem 0' }}>🎄</div>
      
      <div className="appreciation-card">
        <div className="christmas-icons">🎅 🎁 ⭐ 🔔 🎄</div>
        <h2>Merry Christmas, My Love!</h2>
        <button 
          onClick={() => setShowModal(true)}
          style={{
            padding: '15px 30px',
            background: 'linear-gradient(45deg, #ff69b4, #ff1493)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: '1rem 0',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s',
            fontFamily: 'Dancing Script, cursive'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}
        >
          ❤️ Click for Love Message! ❤️
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(139, 69, 19, 0.3), rgba(34, 139, 34, 0.3)), url("https://images.unsplash.com/photo-1674859146251-53c7c74a76fd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FudGElMjBjbGF1c3xlbnwwfHwwfHx8MA%3D%3D")', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2rem', borderRadius: '25px', maxWidth: '90%', maxHeight: '90%', overflow: 'auto', border: '3px solid #ff69b4', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
            <h2 style={{ textAlign: 'center', color: '#8B4513', marginBottom: '1rem', fontFamily: 'Mountains of Christmas, cursive', fontSize: '2.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>🎄 To My Beautiful Wife 🎄</h2>
            
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#2c5530', textAlign: 'left', margin: '2rem 0', fontFamily: 'Dancing Script, cursive' }}>
              My dearest Juliana, my babe for 6 years now... ❤️<br/><br/>
              We have been together through it all, suffering from distance but our love has only grown stronger! The miles between us could never diminish what we share. 💕🌍<br/><br/>
              You mean everything to me, and I want you to know how much you truly mean to my heart and soul. Every memory we've created together is precious to me... ✨<br/><br/>
              From Gboy house to August 11, to Yinka's place - all of these moments I hold so precious to my heart! Each memory is a treasure that I carry with me always. 💫🏠<br/><br/>
              My love for you is unwavering, eternal, and grows stronger each day. I have an eternal craving to see you, to hold you, to be with you. You are my heart, my soul, my everything! 🙏❤️<br/><br/>
              Merry Christmas my beautiful wife! Here's to many more years of love, memories, and being together! 🎄💑
            </p>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button onClick={() => setShowModal(false)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #ff69b4, #ff1493)', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>❤️ Close with Love</button>
            </div>
          </div>
        </div>
      )}

      <Link to="/" className="back-btn">🏠 Back to Homepage</Link>
    </div>
  );
};

export default JulianaPage;