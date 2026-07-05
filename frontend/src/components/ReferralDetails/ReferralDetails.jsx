import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import Navbar from "../../components/Navbar/Navbar";
import "./ReferralDetails.css";

const ReferralDetails = () => {
  const { id } = useParams();

  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReferral();
  }, []);

  const getReferral = async () => {
    try {
      const response = await api.get(`/referrals?id=${id}`);

      setReferral(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!referral) {
    return <h2>Referral not found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="details-container">
        <h1>Referral Details</h1>

        <h2>{referral.name}</h2>

        <p><strong>Referral ID:</strong> {referral.id}</p>

        <p><strong>Service Name:</strong> {referral.serviceName}</p>

        <p><strong>Date:</strong> {referral.date}</p>

        <p><strong>Profit:</strong> ₹{referral.profit}</p>

        <Link to="/">
          ← Back to Dashboard
        </Link>
      </div>
    </>
  );
};

export default ReferralDetails;