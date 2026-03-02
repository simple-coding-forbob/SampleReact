
export interface IAuthState {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;

  signedIn: boolean;
  signin: () => void;
  signout: () => void;
}
