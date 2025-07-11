import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export function Sidenav({ routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl border border-blue-gray-100 transition-transform duration-300 xl:translate-x-0`}
    >
      <div className={`relative`}>
        {token && (
          <div className="flex items-center gap-4 border-b border-blue-gray-100 p-4">
            <Avatar
              src={userInfo.avatar || "/img/bruce-mars.jpeg"}
              alt="avatar"
              className="border border-blue-500"
            />
            <div>
              <Typography
                variant="h6"
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                className="text-lg font-semibold"
              >
                {userInfo.username || userInfo.email?.split("@")[0] || "User"}
              </Typography>
              <Typography
                variant="small"
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                className="opacity-70"
              >
                ID: {userInfo.id ? `#${userInfo.id}` : "N/A"}
              </Typography>
            </div>
          </div>
        )}
        <IconButton
          variant="text"
          color="white"
          size="lg"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-6 w-6" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => {
          if (token && layout === "auth") return null;

          return (
            <ul key={key} className="mb-4 flex flex-col gap-1">
              {title && (
                <li className="mx-3.5 mb-2 mt-4">
                  <Typography
                    variant="small"
                    color={sidenavType === "dark" ? "white" : "blue-gray"}
                    className="font-black uppercase opacity-75"
                  >
                    {title}
                  </Typography>
                </li>
              )}
              {pages.map(({ icon, name, path }) => (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "gradient" : "text"}
                        color={
                          isActive
                            ? sidenavColor
                            : sidenavType === "dark"
                            ? "white"
                            : "blue-gray"
                        }
                        className="flex items-center gap-4 px-6 py-3 capitalize"
                        fullWidth
                      >
                        <div
                          className={`${isActive ? "text-white" : ""} text-xl`}
                        >
                          {icon}
                        </div>
                        <Typography
                          color={
                            isActive
                              ? "white"
                              : sidenavType === "dark"
                              ? "white"
                              : "blue-gray"
                          }
                          className="text-base font-medium capitalize"
                        >
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </aside>
  );
}

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
