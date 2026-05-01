import "./TeacherMsg.css";

import messageIcon from "../../Assets/message.png";

export default function TeacherMsg() {
  return (
    <div className="msg-card">
      <div className="left">
        <img src={messageIcon} className="msg-icon" alt="" />

        <div>
          <h3>Teacher Messages</h3>
          <p>2 new messages</p>
        </div>
      </div>

      <button className="view-btn">View All</button>
    </div>
  );
}