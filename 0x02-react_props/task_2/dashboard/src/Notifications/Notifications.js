import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";
import "./NotificationItem";

function Notify() {
  return (
    <>
      <div className="Notifications" style={{ border: "2px dotted #ED8894" }}>
        <p>Here is the list of notifications</p>
        <button
          style={{
            float: "right",
            marginTop: "-70px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}
          aria-label="close"
        >
          <img src={closeIcon} alt="close"></img>
        </button>
        <ul>
          <Notification
            type="default"
            value="New course available"
            style={{ color: "#524288" }}
          />
          <Notification
            type="urgent"
            value="New resume available"
            style={{ color: "#FF3E37" }}
          />
          <NotificationItem type="urgent" html={getLatestNotification()} />
        </ul>
      </div>
    </>
  );
}
export default Notify;
