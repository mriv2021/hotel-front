import { Nav } from "../nav";
import logo from "../../../../images/logos/logo3.jpeg";

import "./styles.css";
export function HeaderPublic() {
  return (
   
    
    <header className="header-public">
    <div className="header-container">
      <strong className="header-public-logo"><img src={logo}/></strong>
      <Nav/>
    
    </div>

    </header>
    
  
  );
}