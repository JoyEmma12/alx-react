import * as JSONdata from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  return JSONdata.filter(
    (notification) => notification.author.id === userId
  ).map((notification) => notification.context);
}
