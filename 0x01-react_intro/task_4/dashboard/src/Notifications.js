import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";

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
          <li data-priority="default" style={{ color: "#524288" }}>
            New course available
          </li>
          <li data-priority="urgent" style={{ color: "#FF3E37" }}>
            New resume available
          </li>
          <li
            style={{ color: "#FF3E37", fontWeight: "bold" }}
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
    </>
  );
}
export default Notify;
