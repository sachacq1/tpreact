/* eslint-disable react/prop-types */

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Main from "../main/Main.jsx";
const Layout = (props) => {
  return (
    <>
      <Header />
<Main>{props.children}</Main>
      <Footer />
    
    </>
  );
};

export default Layout