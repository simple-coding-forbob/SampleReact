import type { IJwt } from "./IJwt";

export interface IAuthState {
  loggedIn: boolean;
  login: (jwt: IJwt) => void;
  logout: () => void;

  signedIn: boolean;
  signin: (jwt: IJwt) => void;
  signout: () => void;
}
