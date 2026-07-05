import "./Referrals.css";

const Referrals = ({ referral }) => {
  const copyCode = () => {
    navigator.clipboard.writeText(referral.code);
    alert("Referral code copied!");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(referral.link);
    alert("Referral link copied!");
  };

  return (
    <div className="referral-container">
      <h2>Refer Friends & Earn More</h2>

      <div className="referral-card">
        <p>
          <strong>Referral Code</strong>
        </p>

        <input
          type="text"
          value={referral.code}
          readOnly
        />

        <button onClick={copyCode}>
          Copy Code
        </button>

        <p>
          <strong>Referral Link</strong>
        </p>

        <input
          type="text"
          value={referral.link}
          readOnly
        />

        <button onClick={copyLink}>
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default Referrals;