import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const AuntyKaffyPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPromiseInput, setShowPromiseInput] = useState(false);
  const [promise, setPromise] = useState('');

  const handlePromiseSubmit = async () => {
    if (promise.trim()) {
      try {
        await supabase.from('promises').insert([{ promise: promise.trim(), person: 'Aunty Kaffy' }]);
        alert('Promise saved! 🎄');
        setPromise('');
        setShowPromiseInput(false);
        setShowModal(false);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="person-page">
      <h1 className="person-title">Aunty Kaffy</h1>
      <div style={{ fontSize: '3rem', margin: '1rem 0' }}>🎄</div>
      
      <div className="appreciation-card">
        <div className="christmas-icons">🎅 🎁 ⭐ 🔔 🎄</div>
        <h2>Merry Christmas, Aunty Kaffy!</h2>
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
            <h2 style={{ textAlign: 'center', color: '#8B4513', marginBottom: '1rem', fontFamily: 'Mountains of Christmas, cursive', fontSize: '2.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>🎄 To Aunty Kaffy 🎄</h2>
            
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#2c5530', textAlign: 'left', margin: '2rem 0', fontFamily: 'Dancing Script, cursive' }}>
              So Aunty Kaffy, this is what I was working on and just wanted to say merry Christmas and thank you for the joy and fun moments you brought to all of us through the course of the year... 🎉<br/><br/>
              Your caring heart and your amazing vibe... the best hypeman or as you would prefer hypewoman the world has ever seen! A classic MC, world-class level! 🎤✨<br/><br/>
              Really grateful for all the fun memories this year! 🙏❤️
            </p>
            
            <div style={{ background: 'rgba(255, 193, 7, 0.2)', border: '2px solid #FFC107', borderRadius: '15px', padding: '1rem', margin: '1rem 0' }}>
              <p style={{ fontSize: '1.1rem', color: '#8B4513', fontWeight: 'bold', textAlign: 'center', margin: 0, fontFamily: 'Dancing Script, cursive' }}>
                Now that you know Aunty Kaffy is here and so this is my own Christmas card, so you can lay your promise eshey ooo adupe! CASH IS ALLOWED 😊🎁💰
              </p>
            </div>
            
            {!showPromiseInput ? (
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button onClick={() => setShowPromiseInput(true)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #228B22, #32CD32)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>🤝 Make a Promise</button>
                <button onClick={() => setShowModal(false)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #DC143C, #FF6347)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>❌ Close</button>
              </div>
            ) : (
              <div style={{ marginTop: '1.5rem' }}>
                <textarea 
                  value={promise}
                  onChange={(e) => setPromise(e.target.value)}
                  placeholder="Type your Christmas promise here... 🎄"
                  style={{ width: '100%', height: '120px', padding: '15px', border: '3px solid #228B22', borderRadius: '15px', fontSize: '1.1rem', fontFamily: 'Dancing Script, cursive', resize: 'vertical' }}
                />
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button onClick={handlePromiseSubmit} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #228B22, #32CD32)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>🎁 Submit Promise</button>
                  <button onClick={() => setShowPromiseInput(false)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #DC143C, #FF6347)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>❌ Cancel</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Link to="/" className="back-btn">🏠 Back to Homepage</Link>
    </div>
  );
};

export default AuntyKaffyPage;