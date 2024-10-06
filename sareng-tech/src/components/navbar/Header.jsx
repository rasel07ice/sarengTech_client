import { useAuth } from "@/context/AuthProvider";
import { FiLogIn } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";

const Header = () => {
  const { user, userLogOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    userLogOut().then(() => {
      toast("User log out successfully");
      navigate("/");
    });
  };
  return (
    <header className="mb-36">
      <div className="navbar fixed top-0 left-0 bg-base-100 z-10 px-4 md:px-8 lg:px-24 xl:px-32">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle md:hidden"
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Courses</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <details>
                  <summary>More</summary>
                  <ul className="p-2 z-10">
                    <li>
                      <Link to="/howitworks">How it Works</Link>
                    </li>
                    <li>
                      <Link to="/imagegallery">Image Gallary</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="w-48 h-16">
            <Link to="/">
              <img src="./logo.png" alt="logo" />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex navbar-center">
          <ul className="menu menu-horizontal px-1 space-x-1 text-[12px]">
            <li id="idHome">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "hover:bg-primary"
                }
              >
                Home
              </NavLink>
            </li>
            <li id="idCourses">
              <NavLink
                to="/Courses"
                className={({ isActive }) =>
                  isActive ? "active" : "hover:bg-primary"
                }
              >
                Courses
              </NavLink>
            </li>

            <li id="idAbout">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "active" : "hover:bg-primary"
                }
              >
                About Us
              </NavLink>
            </li>
            <li id="idContact">
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? "active" : "hover:bg-primary"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2 z-10">
                  <li id="idHow">
                    <NavLink
                      to="/howitworks"
                      className={({ isActive }) =>
                        isActive ? "active " : "hover:bg-primary"
                      }
                    >
                      How it Works
                    </NavLink>
                  </li>

                  <li id="idImage">
                    <NavLink
                      to="/imagegallery"
                      className={({ isActive }) =>
                        isActive ? "active" : "hover:bg-primary"
                      }
                    >
                      Image Gallary
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col -space-y-2">
                <span className="text-primary text-sm">Hi!</span>
                <span className="text-lg font-semibold text-secondary">
                  {user?.displayName}
                </span>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle flex flex-row avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">update</span>
                    </a>
                  </li>
                  <li>
                    <span>{user?.email}</span>
                  </li>
                  <li className="hover:bg-base-100">
                    <div>
                      <Button
                        variant="secondary"
                        className="w-4/5 mx-auto"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-x-1 flex flex-row">
              <Link to="/login">
                <Button className="" variant="outline">
                  Login{" "}
                  <span className="ml-1 text-sm">
                    <FiLogIn />
                  </span>
                </Button>
              </Link>

              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
