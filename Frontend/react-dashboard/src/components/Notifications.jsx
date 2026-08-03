import "../styles/notifications.css";

function Notifications() {

  const notifications = [

    {
      title: "Prediction Completed",
      time: "2 mins ago",
      color: "green",
      icon: "🤖",
    },

    {
      title: "PDF Report Exported",
      time: "8 mins ago",
      color: "blue",
      icon: "📄",
    },

    {
      title: "Dataset Updated",
      time: "15 mins ago",
      color: "orange",
      icon: "📊",
    },

    {
      title: "Revenue Increased by 18%",
      time: "Today",
      color: "green",
      icon: "📈",
    },

    {
      title: "New User Login",
      time: "Today",
      color: "blue",
      icon: "👤",
    }

  ];

  return (

    <div className="notification-card">

      <h3>🔔 Notifications</h3>

      {notifications.map((item,index)=>(

        <div className="notification-item" key={index}>

          <div className={`notify-dot ${item.color}`}></div>

          <div className="notification-content">

            <h4>{item.icon} {item.title}</h4>

            <span>{item.time}</span>

          </div>

        </div>

      ))}

    </div>

  );

}

export default Notifications;