import {
  NotificationFeedPopover,
  NotificationIconButton,
} from "@knocklabs/react-notification-feed";

import { useState, useRef } from "react";

const NotificationFeed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const notifButtonRef = useRef(null);

  return (
    <>
      <NotificationIconButton
        ref={notifButtonRef}
        onClick={() => setIsVisible(!isVisible)}
      />
      <NotificationFeedPopover
        buttonRef={notifButtonRef}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        placement="bottom-end"
      />
    </>
  );
};

export default NotificationFeed;