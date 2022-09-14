import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { routes } from "./routes";

export default function Nav({ isOpen, setIsOpen }) {
  const handleHeaderBurger = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={`nav-wrp ${isOpen ? '' : 'hidden'}`}>
      <div onClick={handleHeaderBurger} className="nav-burger"></div>
      {routes.map((route, i) =>
        <NavLink className='nav-item' key={route.title + i} to={route.to}>
          <NavItem Icon={route.icon} title={route.title} />
        </NavLink>
      )}
    </div>
  )
}