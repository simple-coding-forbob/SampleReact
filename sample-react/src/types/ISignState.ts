import type { IJwt } from "./IJwt";

export interface ISignState {
  signedIn: boolean;
  signin: (jwt: IJwt) => void;
  signout: () => void;
}
