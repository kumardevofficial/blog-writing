// AuthContext.js (Provider)
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(null); // start with null to indicate "unknown" state
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/auth/login-check",
          { withCredentials: true }
        );
        setLoginStatus(response.data.authenticated);
        setUserName(response.data.user || "");
      } catch (error) {
        setLoginStatus(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{ loginStatus, setLoginStatus, userName, setUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
