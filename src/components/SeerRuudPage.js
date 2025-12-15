import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const SeerRuudPage = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showPromiseInput, setShowPromiseInput] = useState(false);
  const [promise, setPromise] = useState('');
  const brunoVideoRef = useRef(null);
  const ruudVideoRef = useRef(null);

  const handlePromiseSubmit = async () => {
    if (promise.trim()) {
      try {
        await supabase.from('promises').insert([{ promise: promise.trim(), person: 'Seer Ruud' }]);
        alert('Promise saved! 🎄');
        setPromise('');
        setShowPromiseInput(false);
        setShowSecondModal(false);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="person-page">
      <h1 className="person-title">Seer Ruud Van Nisteroy</h1>
      <div style={{ fontSize: '3rem', margin: '1rem 0' }}>🎄</div>
      
      <div className="appreciation-card">
        <div className="christmas-icons">🎅 🎁 ⭐ 🔔 🎄</div>
        <h2>Merry Christmas Sir! 🎄</h2>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.7', color: '#1a3d1f', textAlign: 'left', margin: '2rem 0', fontWeight: '700', textShadow: '1px 1px 3px rgba(0,0,0,0.3)', letterSpacing: '0.5px' }}>
          Merry Christmas Sir! 🎄<br/><br/>
          This would basically just be a gratitude message for a year spent together, a year which once again I learnt a lot from you and gained a lot as well... 📚✨<br/><br/>
          Thank you sir for everything - the laptop 💻, the enormous unrelenting unwavering school support 🎓. I really do appreciate it all sir, thank you! Forever in debt 🙏❤️<br/><br/>
          Your guidance has shaped my journey in ways I can never fully express. You've been an amazing mentor whose wisdom and support have been like a bright star throughout this year! 🌟 Your leadership inspires growth and learning at every turn. Here's to the incredible impact you've made! 🏆✨
        </p>
        <button 
          onClick={() => setShowFirstModal(true)}
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
            transition: 'transform 0.3s'
          }}
        >
          🎁 Click for Surprise! 🎁
        </button>
      </div>

      {/* First Modal */}
      {showFirstModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(139, 69, 19, 0.3), rgba(34, 139, 34, 0.3)), url("https://images.unsplash.com/photo-1674859146251-53c7c74a76fd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FudGElMjBjbGF1c3xlbnwwfHwwfHx8MA%3D%3D")', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2rem', borderRadius: '25px', maxWidth: '90%', maxHeight: '90%', overflow: 'auto', border: '3px solid #d4af37', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
            <h2 style={{ textAlign: 'center', color: '#8B4513', marginBottom: '0.5rem', fontFamily: 'Mountains of Christmas, cursive', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>🎄 From Bruno to Seer Ruud 🎄</h2>
            <p style={{ textAlign: 'center', color: '#2c5530', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', marginBottom: '0.5rem' }}>Thanks for the name BRUNO ✨</p>
            <p style={{ textAlign: 'center', color: '#8B4513', fontSize: '1.1rem', fontFamily: 'Dancing Script, cursive', marginBottom: '1.5rem', fontWeight: 'bold' }}>Make sure to click the second click me button sir 👆</p>
            <video ref={brunoVideoRef} controls style={{ width: '100%', maxWidth: '500px', borderRadius: '15px', border: '3px solid #228B22' }}>
              <source src="/bruno.mp4" type="video/mp4" />
            </video>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button onClick={() => { if(brunoVideoRef.current) brunoVideoRef.current.pause(); setShowSecondModal(true); }} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #228B22, #32CD32)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.1rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>🎁 Click me again 🎁</button>
              <button onClick={() => setShowFirstModal(false)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #DC143C, #FF6347)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.1rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>❌ Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Second Modal */}
      {showSecondModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(139, 69, 19, 0.3), rgba(34, 139, 34, 0.3)), url("https://images.unsplash.com/photo-1674859146251-53c7c74a76fd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FudGElMjBjbGF1c3xlbnwwfHwwfHx8MA%3D%3D")', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1001 }}>
          <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2rem', borderRadius: '25px', maxWidth: '90%', maxHeight: '90%', overflow: 'auto', border: '3px solid #d4af37', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
            <h2 style={{ textAlign: 'center', color: '#8B4513', marginBottom: '1rem', fontFamily: 'Mountains of Christmas, cursive', fontSize: '2.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>🎅 Thankii Seer Ruud 🎅</h2>
            <video ref={ruudVideoRef} controls style={{ width: '100%', maxWidth: '500px', borderRadius: '15px', border: '3px solid #DC143C' }}>
              <source src="/ruud.mp4" type="video/mp4" />
            </video>
            <p style={{ margin: '1.5rem 0', fontSize: '1.2rem', color: '#2c5530', fontFamily: 'Dancing Script, cursive', lineHeight: '1.6', textAlign: 'center' }}>
              This is probably my last Christmas being referred to as a kid so I'm gonna do childish things like this, hope you enjoy it! 🎄 As a kid I want a Christmas present - this would serve as that Christmas card I gave to relatives back then to write promises. ✨
            </p>
            
            {!showPromiseInput ? (
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button onClick={() => setShowPromiseInput(true)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #228B22, #32CD32)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>🤝 Promise</button>
                <button onClick={() => setShowSecondModal(false)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #FF8C00, #FFA500)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>⏰ Not Today</button>
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

export default SeerRuudPage;