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

//props -> properties
//dynamic properties passess to the components just like you are passing the parameters to the function
//props is the object containing all the paramertes we pass
//all the js code should be in the {}
const Rcard = (props) => {
  const { resName, cuisine, rating, costfortwo } = props;
  return (
    <div className="rcard">
      <img
        alt="headerLogo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
      />
      <h2>{resName}</h2>
      <h3>{cuisine}</h3>
      <h3>{rating}</h3>
      <h3>Cost for two {costfortwo}INR</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="RestCon">
      <Rcard
        resName="Priya Restaurant"
        cuisine="Chinese, Italian"
        rating="4.9"
        costfortwo="400"
      />
      <Rcard
        resName="Sourabh Restaurant"
        cuisine="Punjabi"
        rating="5"
        costfortwo="1000"
      />
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
