import React from 'react';
import './forgotpassword.css';

function ForgotPassword({ onClose, onSend }) {
  return (
    <div className="fp-overlay">
      <div className="fp-modal">
        <div className="fp-title-main">iFind</div>
        <div className="fp-title-sub">Forgot your Password?</div>
        <div className="fp-desc">Enter your Email Address</div>
        <input type="email" className="fp-input" placeholder="e.g. username@ifind.com" />
        <button className="fp-send" onClick={onSend}>Send Code</button>
        <button className="fp-back" onClick={onClose}>
          <span style={{marginRight:"7px"}}>←</span> Back To Login
        </button>
      </div>
    </div>
  );
}
export default ForgotPassword;
