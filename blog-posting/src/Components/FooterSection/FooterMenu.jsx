import AboutUs from "./AboutUs";

const FooterMenu = () => {
  return (
    <div
      className="w-screen h-40 bg-blue-500 mt-5 box-border p-4"
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <ol className="w-full">
        <li className="text-white text-sm">Home</li>
        <li className="text-white text-sm">Plitics</li>
        <li className="text-white text-sm">Technology</li>
        <li className="text-white text-sm">General</li>
        <li className="text-white text-sm">Post</li>
        <li className="text-white text-sm">Login / Signup</li>
      </ol>
      <AboutUs />
    </div>
  );
};

export default FooterMenu;
