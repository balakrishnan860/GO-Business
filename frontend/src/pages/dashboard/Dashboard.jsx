import { useEffect,useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import Overview from "../../components/overview/Overview";
import ServiceSummary from "../../components/serviceSummary/serviceSummary";
import Referral from "../../components/Referrals/Referrals";
import ReferralsTable from "../../components/ReferralsTable/ReferralsTable";
import Footer from "../../components/Footer/Footer";
import { api } from "../../services/api"
import "./Dashboard.css"
const Dashboard = ()=>{
  const [dashboarddata,setDashboardData] = useState(null)
  const [loading,setLoading] = useState(true)
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  useEffect(()=>{
    fetchDashboard()
  },[])
  const fetchDashboard = async () => {
  try {
    const response = await api.get("/referrals");

    console.log(response.data);
    console.log(response.data.data.serviceSummary)
    console.log(response.data.data.referrals)

    setDashboardData(response.data.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  if (loading){
    return <h2>Loading...</h2>
  }
  const filteredReferrals = (dashboarddata?.referrals || []).filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

const sortedReferrals = [...filteredReferrals].sort((a, b) =>
  sortOrder === "asc"
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name)
);
const indexOfLastRow = currentPage * rowsPerPage;
const indexOfFirstRow = indexOfLastRow - rowsPerPage;

const currentReferrals = sortedReferrals.slice(
  indexOfFirstRow,
  indexOfLastRow
);

const totalPages = Math.ceil(sortedReferrals.length / rowsPerPage);
    return (
  <>
    <Navbar />

    <div className="dashboard-container">
      <h1>Referral Dashboard</h1>

      <p>
        Track your referrals, earnings, and partner activity in one place.
      </p>
       
       <Overview metrics={dashboarddata?.metrics || []}/>

      <ServiceSummary
  serviceSummary={dashboarddata?.serviceSummary}
/>

      {dashboarddata?.referral && (
  <Referral referral={dashboarddata.referral} />
)}       
      <div className="search-sort-container">
       <input
       className="search-input"
  type="search"
  placeholder="Search referrals"
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }}
/>
        {/* <ReferralsTable referrals={filteredReferrals} /> */}
        <button className="sort-btn"
  onClick={() => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setCurrentPage(1);
  }}
>
  Sort {sortOrder === "asc" ? "↓" : "↑"}
</button>
</div>
<ReferralsTable referrals={currentReferrals} /> 
<div className="pagination">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  <span>
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
      {/* {dashboarddata?.referrals && (
  <ReferralsTable referrals={dashboarddata.referrals} />
)} */}
    </div>
   <Footer />
  </>
  )
}

export default Dashboard