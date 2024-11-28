import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Strore/AuthContext";

const Navbar = () => {
  // const navigate = useNavigate();
  // const loginObj = useContext(AuthContext);
  // const loginStatus = loginObj.loginStatus;

  const navigate = useNavigate();
  const { loginStatus, setLoginStatus } = useContext(AuthContext);

  // Check login status on navbar load
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/auth/login-check",
          { withCredentials: true }
        );
        setLoginStatus(response.data.authenticated);
      } catch (error) {
        setLoginStatus(false);
      }
    };

    checkLoginStatus();
  }, [setLoginStatus]);

  const URL = "http://localhost:3000/auth/logout";

  const logout = async () => {
    try {
      await axios.get(URL, { withCredentials: true });
      setLoginStatus(false);
      navigate("/user/login");
      // console.log(" successfuly log out ");
      // navigate("/user/login");
    } catch (error) {
      console.log(" there is some eror ", error);
    }
  };

  // const URL = "http://localhost:3000/auth/login-check";
  // const [checkLoginStatus, setLoginStatus] = useState(false);
  // useEffect(() => {
  //   const checkLogin = async () => {
  //     try {
  //       const loginStatus = await axios.get(URL, { withCredentials: true });
  //       setLoginStatus(loginStatus.data.authenticated);
  //     } catch (error) {
  //       setLoginStatus(false);
  //     }
  //   };
  //   checkLogin();
  // }, []);
  return (
    <div
      className="w-screen bg-blue-500 h-10 mb-5"
      style={{ display: "flex", alignItems: "center" }}
    >
      <ol
        className="w-full"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Link to={"/"} className="text-white font-extrabold">
          Home
        </Link>
        <Link to={"/politics-news"} className="text-white font-extrabold">
          Politics
        </Link>
        <Link to={"/technology-news"} className="text-white font-extrabold">
          Technology
        </Link>
        <Link to={"/general-news"} className="text-white font-extrabold">
          General
        </Link>
        <Link to={"/create-post"} className="text-white font-extrabold">
          Post
        </Link>
        {loginStatus ? (
          <Link onClick={logout} className="text-white font-extrabold">
            Logout
          </Link>
        ) : (
          <Link to={"/user/login"} className="text-white font-extrabold">
            Login / Signup
          </Link>
        )}
      </ol>
    </div>
  );
};

export default Navbar;
