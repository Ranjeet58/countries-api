import { Link } from "react-router-dom";
import Toggle from "./Toggle";

function Header() {
  return (
    <header>
      
        <nav>
         <div className="header-wrapper">
            <Link to="/">
              <h1>Where in the world?</h1>
            </Link>
            <Toggle />
            </div>
        </nav>
      
    </header>
  );
}

export default Header;
