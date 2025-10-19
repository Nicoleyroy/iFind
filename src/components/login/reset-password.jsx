function ResetPassword({ onClose, onReset }) {
  return (
    <div className="fp-overlay">
      <div className="fp-modal">
        <div className="reset-title-main">iFind</div>
        <div className="reset-desc">Enter and confirm your new password</div>
        <input
          className="reset-input"
          type="password"
          placeholder="New password"
        />
        <input
          className="reset-input"
          type="password"
          placeholder="Confirm password"
        />
        <button className="reset-btn" onClick={onReset}>Reset Password</button>
      </div>
    </div>
  );
}

export default ResetPassword;
