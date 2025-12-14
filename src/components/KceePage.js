import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const KceePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="person-page">
      <h1 className="person-title">Kcee</h1>
      <div style={{ fontSize: '3rem', margin: '1rem 0' }}>🎄</div>
      
      <div className="appreciation-card">
        <div className="christmas-icons">🎅 🎁 ⭐ 🔔 🎄</div>
        <h2>Merry Christmas, Kcee!</h2>
        <button 
          onClick={() => setShowModal(true)}
          style={{
            padding: '15px 30px',
            background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
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
          🎁 Click for Message! 🎁
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(139, 69, 19, 0.3), rgba(34, 139, 34, 0.3)), url("https://images.unsplash.com/photo-1674859146251-53c7c74a76fd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FudGElMjBjbGF1c3xlbnwwfHwwfHx8MA%3D%3D")', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2rem', borderRadius: '25px', maxWidth: '90%', maxHeight: '90%', overflow: 'auto', border: '3px solid #d4af37', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
            <h2 style={{ textAlign: 'center', color: '#8B4513', marginBottom: '1rem', fontFamily: 'Mountains of Christmas, cursive', fontSize: '2.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>🎄 To Mrs Akinwande 🎄</h2>
            
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#2c5530', textAlign: 'left', margin: '2rem 0', fontFamily: 'Dancing Script, cursive' }}>
              Mrs Akinwande where do I even start from... literally on my knees and saying thank you for everything! 🙏<br/><br/>
              Is it the support, the advice, the motivations? Which part of my life have you not had a hand in it? I will answer none... 💫<br/><br/>
              Thank you for being a messiah in my life. I can't start to mention everything you have done that I'm grateful for because the scrolling wouldn't end but I'm eternally grateful! ❤️<br/><br/>
              Wake up every morning thanking God I have you as a sister to look up to. I'm just really happy to have you and thank you for everything you have done for me this year. I really do appreciate it! Thank you Aunty Kelechi! 🙏✨
            </p>
            
            <div style={{ background: 'rgba(255, 193, 7, 0.2)', border: '2px solid #FFC107', borderRadius: '15px', padding: '1rem', margin: '1rem 0' }}>
              <p style={{ fontSize: '1.1rem', color: '#8B4513', fontWeight: 'bold', textAlign: 'center', margin: 0, fontFamily: 'Dancing Script, cursive' }}>
                And by the way 😏 I am still looking forward to that payment oooo... that 50k! Thankiiiiiiiii 😂💰
              </p>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button onClick={() => setShowModal(false)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #DC143C, #FF6347)', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>❌ Close</button>
            </div>
          </div>
        </div>
      )}

      <Link to="/" className="back-btn">🏠 Back to Homepage</Link>
    </div>
  );
};

export default KceePage;