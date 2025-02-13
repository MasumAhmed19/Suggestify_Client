import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { BsPencilSquare } from "react-icons/bs";


const Header = () => {
  const { user, logOut } = useAuth();

  const menus = (
    <div className="flex gap-2 text-base capitalize">
      <span>
        <NavLink
          className="navlink"
          to="/"
        >
          home
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to="/queries"
        >
          queries
        </NavLink>
      </span>
      {
        user && 
        <>
          <span>
        <NavLink
          className="navlink"
          to="/my-queries"
        >
          My Queries
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to="/my-recommendations"
        >
          My Recommendations
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to="/recommendations-for-me"
        >
          Recommendations for me
        </NavLink>
      </span>
        </>
      }

      <span>
        <NavLink
          className="navlink"
          to="/about"
        >
          about
        </NavLink>
      </span>
    </div>
  );

  const dropdownMenu = (
    <div className="dropdownMenu w-screen">
      <span>
        <NavLink
          className="navlink"
          to="/"
        >
          home
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to="/queries"
        >
          queries
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to={`/my-queries`}
        >
          My Queries
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink whitespace-nowrap"
          to={`/my-recommendations`}
        >
          My Recommendations
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink whitespace-nowrap"
          to={`/recommendations-for-me`}
        >
          Recommendations for me
        </NavLink>
      </span>
      
      <span>
        <NavLink
          className="navlink"
          to="/about"
        >
          about
        </NavLink>
      </span>
    </div>
  );

  return (
    <div className="g3">
      <div className="container mx-auto border-b-[1px] border-[#f1f1f1]">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown z-[1000]">
              
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
            <Link
              to="/"
              className="w-28"
            >
              <img
                src="/logo.png"
                alt=""
                className="object-fit"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menus}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                {/* profile set krte hbe */}

                <div className="dropdown dropdown-bottom dropdown-end flex items-center">
                  <Link to='/add-query'>
                    <div className="flex items-center gap-2 text-gray-500 hover:text-black"><BsPencilSquare className="text-xl" /><h4 className="text-base">Add Query</h4></div>
                  </Link>
                  
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1 flex items-center gap-2"
                  >
                    <img src={`${user.photoURL}`} referrerPolicy="no-referrer" className="w-10 h-10 object-cover rounded-full" alt="" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content text-base menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow"
                  >
                    <li><Link to={`/my-queries`}>My Queries</Link></li>
                    <li><Link to={`/my-recommendations`}>My Recommendations</Link></li>
                    <li><Link to={`/recommendations-for-me`}>Recommendations for me</Link></li>
                    <li onClick={logOut}>
                      <Link className="hover:bg-transparent">
                        <button className="btn1">Logout</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn1">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
