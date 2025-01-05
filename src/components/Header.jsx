import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

    const menus = 
        (<div className="flex gap-2 text-base capitalize">
            <span><NavLink className="navlink" to='/'>home</NavLink></span>
            <span><NavLink className="navlink" to='/queries' >queries</NavLink></span>
            <span><NavLink className="navlink" to='/about' >about</NavLink></span>
        </div>)

    const dropdownMenu = 
    (<div className="dropdownMenu">
        <span><NavLink className="navlink" to='/'>home</NavLink></span>
        <span><NavLink className="navlink" to='/queries' >queries</NavLink></span>
        <span><NavLink className="navlink" to='/about' >about</NavLink></span>
    </div>)

  return (
    <div className="container mx-auto border-b-[1px] border-[#f1f1f1]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className=""
            >
              {dropdownMenu}
            </div>
          </div>
          <Link to='/' className="w-28"><img src='../../public/logo.png' alt="" className="object-fit"/></Link>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menus}
          </ul>
        </div>
        <div className="navbar-end">
            {
                user ? (
                    <>
                        <Link onClick={logOut}>
                            <button className="btn1">Logout</button>
                        </Link>

                        {/* profile set krte hbe */}
                        
                    </>

                ):(
                <>
                    <Link to='/login'>
                        <button className="btn1">Login</button>
                    </Link>
                </>
                )
            }
            
        </div>
      </div>
    </div>
  );
};

export default Header;
