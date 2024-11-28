import { Outlet } from "react-router-dom";
import "./App.css";
import FooterMenu from "./Components/FooterSection/FooterMenu";
import Navbar from "./Components/NavBar/Navbar";
import AuthProvider from "./Components/Strore/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="box-border">
        <Navbar />
        {/* <CreatePost /> */}
        {/* <HomePage /> */}
        <Outlet />
        <FooterMenu />
      </div>
    </AuthProvider>
  );
}

export default App;
