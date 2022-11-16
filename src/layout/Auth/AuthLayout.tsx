import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const AuthLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
