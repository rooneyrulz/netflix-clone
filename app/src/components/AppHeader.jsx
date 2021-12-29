import React from "react";
import logoImg from "../Netflix-Logo.png";

const AppHeader = () => {
  const [visibility, setVisibility] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        setVisibility(true);
      } else setVisibility(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`app_header ${visibility && "nav_dark"}`}>
      <div className='container'>
        <img className='app_header__logo' src={logoImg} alt='' />
      </div>
    </div>
  );
};

export default AppHeader;
