import "./ServiceSummary.css";

const ServiceSummary = ({ serviceSummary }) => {
  return (
    <div className="service-summary-container">
      <h2>Service Summary</h2>

      <div className="service-summary-cards">
        <div className="service-card">
          <h3>Service</h3>
          <p>{serviceSummary.service}</p>
        </div>

        <div className="service-card">
          <h3>Your Referrals</h3>
          <p>{serviceSummary.yourReferrals}</p>
        </div>

        <div className="service-card">
          <h3>Active Referrals</h3>
          <p>{serviceSummary.activeReferrals}</p>
        </div>

        <div className="service-card">
          <h3>Total Referral Earnings</h3>
          <p>{serviceSummary.totalRefEarnings}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSummary;