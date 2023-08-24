import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";

function Notify() {
  return (
    <>
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
        </ul>
        <button style={{ float: "right" }} aria-label="close">
          <img src={closeIcon} alt="close"></img>
        </button>
      </div>
    </>
  );
}
export default Notify;
