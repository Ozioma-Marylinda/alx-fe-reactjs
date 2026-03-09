export const useAuth = () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return { isAuthenticated };
};