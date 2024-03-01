import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, SetOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      // true
      SetOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      // false
      SetOnlineStatus(false);
    });
  }, []);

  // Boolean
  return onlineStatus;
};

export default useOnlineStatus;
