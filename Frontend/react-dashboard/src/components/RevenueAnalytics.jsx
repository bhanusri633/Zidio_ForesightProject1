import "../styles/analyticsCards.css";

function RevenueAnalytics() {

    return(

        <div className="analytics-card">

            <h3>📈 Revenue Analytics</h3>

            <p>
                Revenue has increased by
                <strong> 18% </strong>
                compared to last month.
            </p>

            <div className="analytics-stats">

                <div>

                    <h2>₹9.8M</h2>

                    <span>Total Revenue</span>

                </div>

                <div>

                    <h2>+18%</h2>

                    <span>Growth</span>

                </div>

            </div>

        </div>

    );

}

export default RevenueAnalytics;