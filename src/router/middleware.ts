import { redirect } from "react-router-dom";

export const validateSession = () => {
  const token = localStorage.getItem("Authorization");
  if (!token) throw redirect("/bienvenido");
  return;
};
