import React from "react";
import ReactDOM from "react-dom/client";

//Low level planning
/* 
-Header
    -Logo
    -nav items 
-Body
    -Search
    -Res container
    -Res cards
-Footer
    -Copyright
    -Address
    -Many more
*/

//header component
const Header = () => {
  return (
    <div className="headerCon">
      <div className="headerLogo">
        <img
          alt="headerLogo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="headerList">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Location</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Rcard = () => {
  return (
    <div className="rcard">
      <h2>Priya rest</h2>
      <h3>Chinese, Italian</h3>
      <h3>4.9</h3>
      <h3>Contact</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="RestCon">
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
      <Rcard />
    </div>
  );
};
//Highest level component
const Page = () => {
  return (
    <div id="page">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
