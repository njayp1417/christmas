import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const NnePolinpoPage = () => {
  const [showPromiseInput, setShowPromiseInput] = useState(false);
  const [promise, setPromise] = useState('');

  const handlePromiseSubmit = async () => {
    if (promise.trim()) {
      try {
        await supabase.from('promises').insert([{ promise: promise.trim(), person: 'Nne Polinpo' }]);
        alert('Promise saved! 🎄');
        setPromise('');
        setShowPromiseInput(false);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="person-page">
      <h1 className="person-title">Nne Polinpo</h1>
      <div style={{ fontSize: '3rem', margin: '1rem 0' }}>🎄</div>
      
      <div className="appreciation-card">
        <div className="christmas-icons">🎅 🎁 ⭐ 🔔 🎄</div>
        
        <p style={{ fontSize: '1.4rem', lineHeight: '1.7', color: '#1a3d1f', textAlign: 'left', margin: '2rem 0', fontWeight: '700', textShadow: '1px 1px 3px rgba(0,0,0,0.3)', letterSpacing: '0.5px' }}>
          What can I say but thank you... thank you thank you... 🙏<br/><br/>
          You provided me with a sanctuary to save me from mental health issues, walked me to the market reminding me of how daddy would always do that when I was growing up... 🚶‍♂️❤️<br/><br/>
          Of course I left your wahalasome parents house and you assumed upon yourself the role of a father and mother to me... 👨‍👩‍👦<br/><br/>
          Thank you very much Aunty Ify, I'm forever grateful... 🙏✨
        </p>
        
        <h3 style={{ textAlign: 'center', color: '#8B4513', fontFamily: 'Mountains of Christmas, cursive', fontSize: '1.8rem', margin: '1rem 0' }}>CEO of Total Fabrics 🏢</h3>
        
        <video controls style={{ width: '100%', maxWidth: '500px', borderRadius: '15px', border: '3px solid #228B22', margin: '1rem 0' }}>
          <source src="/total.mp4" type="video/mp4" />
        </video>
        
        <p style={{ margin: '1.5rem 0', fontSize: '1.4rem', color: '#1a3d1f', fontFamily: 'Dancing Script, cursive', lineHeight: '1.7', textAlign: 'center', fontWeight: '700', textShadow: '1px 1px 3px rgba(0,0,0,0.3)', letterSpacing: '0.5px' }}>
          This is probably my last Christmas being referred to as a kid so I'm gonna do childish things like this, hope you enjoy it! 🎄 As a kid I want a Christmas present - this would serve as that Christmas card I gave to relatives back then to write promises. ✨
        </p>
        
        {!showPromiseInput ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button onClick={() => setShowPromiseInput(true)} style={{ padding: '15px 30px', background: 'linear-gradient(45deg, #228B22, #32CD32)', color: 'white', border: 'none', borderRadius: '25px', margin: '0 10px', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}>🤝 Make a Promise</button>
          </div>
        ) : (
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ background: 'rgba(255, 193, 7, 0.2)', border: '2px solid #FFC107', borderRadius: '10px', padding: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#8B4513', fontWeight: 'bold', textAlign: 'center', margin: 0 }}>⚠️ CAUTION: Any promise made here excludes my initial 2k ooooo 😂</p>
            </div>
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

      <Link to="/" className="back-btn">🏠 Back to Homepage</Link>
    </div>
  );
};

export default NnePolinpoPage;