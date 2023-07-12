export interface Route {
  path: string;
  name: string;
}

export const Routes = {
  HOME: {
    path: "/",
    name: "Home"
  },
  LOGIN: {
    path: "/login",
    name: "Login"
  },
  REGISTER: {
    path: "/register",
    name: "Register"
  },
  ADMIN: {
    path: "/admin",
    name: "Admin"
  },
  WALLET: {
    path: "/admin/wallet",
    name: "Wallet"
  },
}
