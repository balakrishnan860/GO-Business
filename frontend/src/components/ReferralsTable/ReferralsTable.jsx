import { useNavigate } from "react-router-dom";
import "./ReferralsTable.css";

const ReferralsTable = ({ referrals }) => {
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <h2>All Referrals</h2>

      <table>
        <thead>
  <tr>
    <th>Name</th>
    <th>Service</th>
    <th>Date</th>
    <th>Profit</th>
  </tr>
        </thead>

        <tbody>
  {referrals.map((item) => (
    <tr
      key={item.id}
      onClick={() => navigate(`/referral/${item.id}`)}
    >
      <td>{item.name}</td>
      <td>{item.serviceName}</td>
      <td>{item.date}</td>
      <td>₹{item.profit}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default ReferralsTable;