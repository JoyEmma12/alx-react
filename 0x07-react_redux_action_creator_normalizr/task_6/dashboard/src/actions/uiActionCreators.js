import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

export default function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}
export default function boundLogin(email, password) {
  return {
     user: dispatch(login(email, password)),
  };
}


export default function logout() {
    return {
        type: LOGOUT,
    };
}
export default function boundLogout() {
  return {
     type: dispatch(logout()),
  };
}


export default function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
}
export default function boundDisplayNotificationDrawer() {
  return {
     type: dispatch(displayNotificationDrawer()),
  };
}

export default function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    };
}
export default function boundHideNotificationDrawer() {
  return {
     type: dispatch(hideNotificationDrawer()),
  };
}