// src/store/useUserStore.js
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: { name: "Guest" }, // default user

  setUser: (newUser) => set({ user: newUser }),
}));

export default useUserStore;
