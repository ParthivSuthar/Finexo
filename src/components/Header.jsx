import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-slate-800">
        <div className="flex h-12 items-center justify-between px-11">
            <Link to="/" className="text-white text-xl font-semibold" >
              Finexo
            </Link>
            <div>
              <ul className="flex gap-5">
                <li>
                  <NavLink to="/" className={({isActive}) => `text-white text-lg ${isActive ? "text-cyan-400" : "text-white"}`}>
                      Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({isActive}) => `text-white text-lg ${isActive ? "text-cyan-400" : "text-white"}`}>
                    About
                  </NavLink>

                </li>
                <li>
                  <NavLink to="/services" className={({isActive}) => `text-white text-lg ${isActive ? "text-cyan-400" : "text-white"}`}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/whyus" className={({isActive}) => `text-white text-lg ${isActive ? "text-cyan-400" : "text-white"}`}>
                    Why us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/team" className={({isActive}) => `text-white text-xl ${isActive ? "text-cyan-400" : "text-white"}`}>
                    Team
                  </NavLink>
                </li>
              </ul>
            </div>
        </div>
    </header>
  )
}

export default Header