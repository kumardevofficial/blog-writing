import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Strore/AuthContext";

const ProtectedRoute = ({ element: Element }) => {
  const loginObj = useContext(AuthContext);
  const setLoginStaus = loginObj.setLoginStatus;
  const loginStatus = loginObj.loginStatus;
  // const setUserName = loginObj.setUserName;

  // const [initislaState, setState] = useState(null);

  const URL = "http://localhost:3000/auth/create-post";
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await axios.get(URL, { withCredentials: true });
        // setState(isAuthenticated.data.authenticated);
        console.log(isAuthenticated.data.authenticated);
        setLoginStaus(isAuthenticated.data.authenticated);
      } catch (error) {
        // setState(false);
        setLoginStaus(false);
      }
    };
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (loginStatus === false) {
      navigate("/user/login"); // Redirect to login page
    }
  }, [loginStatus, navigate]);

  if (loginStatus === null) {
    return <h1> Loading ...</h1>;
  }

  if (loginStatus === true) {
    return <Element />;
  }

  // if (initislaState === false) {
  //   Navigate("/user/login");
  // }

  return null;
};

export default ProtectedRoute;
