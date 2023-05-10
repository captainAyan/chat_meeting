import { create } from "zustand";

export default create((set) => ({
  name: "",
  roomID: "",
  login: (name, roomID) => set(() => ({ name, roomID })),
  logout: () => set(() => ({ name: "", roomID: "" })),
}));
