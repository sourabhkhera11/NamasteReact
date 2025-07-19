//This is the header component 
//File name should match with the component name 
import {LOGO_URL} from "../utils/constants";
const Header = () => {
  return (
    <div className="headerCon">
      <div className="headerLogo">
        <img alt="headerLogo" src={LOGO_URL} />
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

export default Header;