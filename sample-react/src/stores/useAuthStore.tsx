import { create } from "zustand";
import type { IAuthState } from "../types/IAuthState";

export const useAuthStore = create<IAuthState>((set) => ({
  loggedIn: false,
  signedIn: false,

  // 로그인 성공 시 호출
  login: () => {
    set({ loggedIn: true });
  },

  logout: () => {
    set({ loggedIn: false });
  },

  signin: () => {
    set({ signedIn: true });
  },

  signout: () => {
    set({ signedIn: false });
  },
}));