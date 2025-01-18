import "./navbar.css";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div>
          <NavLink to="/Men" end>
            Men
          </NavLink>
        </div>
        <div>
          <NavLink to="/Women" end>
            Women
          </NavLink>
        </div>
        <div>
          <NavLink to="/kids" end>
            Kids
          </NavLink>
        </div>
        <div>
          <NavLink to="/New-&-featured" end>
            New & featured
          </NavLink>
        </div>
        <div>
          <NavLink to="/Gifts" end>
            Gifts
          </NavLink>
        </div>
      </div>
      <div className="navbar-logo">
<img src="https://media1.thehungryjpeg.com/thumbs2/ori_3656583_qm1xf2jza3zciqlp2ci000yypeuhnc1hkm8af025_monogram-ds-logo-design.jpg"> 

</img>

      </div>
      <div className="navbar-user-info">user info</div>
    </div>
  );
};

export default Navbar;