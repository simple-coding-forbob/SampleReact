import { create } from "zustand";
import type { IAuthState } from "../types/IAuthState";

export const useAuthStore = create<IAuthState>((set) => ({
  loggedIn: localStorage.getItem("jwt") !== null,

  login: (jwt) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    set({ loggedIn: true });
  },
  logout: () => {
    localStorage.removeItem("jwt");
    set({ loggedIn: false });
  },

  signedIn: localStorage.getItem("jwt2") !== null,
  
  signin: (jwt2) => {
    localStorage.setItem("jwt2", JSON.stringify(jwt2));
    set({ signedIn: true });
  },
  signout: () => {
    localStorage.removeItem("jwt2");
    set({ signedIn: false });
  },
}));
