import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 110,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 222,
});
export const notifiAtom = atom({
  key: "notifiAtom",
  default: 12,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 0,
});
export const finalNotifi = selector({
  key: "finalNotifi",
  get: ({ get }) => {
    const network = get(networkAtom);
    const jobs = get(jobsAtom);
    const notifi = get(notifiAtom);
    const message = get(messageAtom);

    return network + jobs + notifi + message;
  },
});