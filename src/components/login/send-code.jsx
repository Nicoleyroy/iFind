
function EnterCode({ onClose, onVerify }) {
  return (
   <div className="fp-overlay">
  <div className="fp-modal">
    <div className="fp-title-main">iFind</div>
    <div className="fp-code-sent">Code Sent!</div>
    <div className="fp-code-desc">Enter code sent to your email address</div>
    <input className="fp-code-input" type="text" placeholder="e.g. 253342" />
    <button className="fp-code-btn" onClick={onVerify}>Enter Code</button>
    <button className="fp-back-outline" onClick={onClose}>
      <span className="back-arrow">&#8592;</span> Back To Login
    </button>
  </div>
</div>

  );
}
export default EnterCode;
