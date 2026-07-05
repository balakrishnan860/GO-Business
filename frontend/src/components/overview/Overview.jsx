import "./Overview.css"
const Overview = ({metrics})=>{
    return(
        <section className="overview-section">
            <h2>Over View</h2>
            <div className="overview-cards">
                {metrics.map((item)=>(
                  <div className="overview-card" key={item.id}>
                    <h2>{item.label}</h2>
                    <p>{item.value}</p>
                  </div>
                ))}
            </div>
        </section>
    )
}

export default Overview