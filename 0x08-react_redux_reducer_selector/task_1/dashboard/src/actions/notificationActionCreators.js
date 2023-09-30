import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";

export default function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        index: index,
    };
}
export default function boundMarkAsAread(index) {
  return {
     index: dispatch(markAsAread(index)),
  };
}

export default function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter: filter,
    };
}
export default function boundSetNotificationFilter(index) {
  return {
     filter: dispatch(setNotificationFilter(index)),
  };
}