import "../styles/timeline.css";

function ActivityTimeline() {

  const activities = [

    {
      time: "10:45 AM",
      title: "Prediction Generated",
      status: "success",
    },

    {
      time: "10:32 AM",
      title: "Dataset Uploaded",
      status: "info",
    },

    {
      time: "10:18 AM",
      title: "PDF Report Exported",
      status: "warning",
    },

    {
      time: "09:55 AM",
      title: "User Login",
      status: "success",
    },

    {
      time: "09:40 AM",
      title: "Dashboard Viewed",
      status: "info",
    },

  ];

  return (

    <div className="timeline-card">

      <h3>📈 Activity Timeline</h3>

      {activities.map((item, index) => (

        <div className="timeline-item" key={index}>

          <div className={`dot ${item.status}`}></div>

          <div>

            <h4>{item.title}</h4>

            <p>{item.time}</p>

          </div>

        </div>

      ))}

    </div>

  );

}

export default ActivityTimeline;