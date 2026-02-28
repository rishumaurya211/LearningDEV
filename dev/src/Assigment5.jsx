import React from "react";
import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notifiAtom,
  finalNotifi,
} from "./store/atoms/Notification";

const Assigment5 = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notifiAtomCount = useRecoilValue(notifiAtom);
  const messageAtomCount = useRecoilValue(messageAtom);
  const totalNotification = useRecoilValue(finalNotifi);

  return (
    <div>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>

      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>

      <button>
        Message ({messageAtomCount >= 100 ? "99+" : messageAtomCount})
      </button>

      <button>
        Notifications ({notifiAtomCount >= 100 ? "99+" : notifiAtomCount})
      </button>

      <button>Me ({totalNotification})</button>
    </div>
  );
};

export default Assigment5;
