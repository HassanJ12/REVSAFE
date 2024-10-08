import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export function DrawerWithNavigation({ open, setOpen }) {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("jwt-token")
    navigate("/")
  }
  return (
    <>
      <Drawer
        style={{borderRightColor:"whitesmoke",border:2}}
        overlay={false}
        className="top-auto bg-[#1b1b35] text-yellow-50 border-r-2"
        overlayProps={{ className: "fixed inset-0 z-50 bg-black opacity-50" }}
        open={open}
        onClose={() => setOpen(open)}
      >
        <List className="mt-2 mx-0 text-cyan-50 !min-w-full">
          <Link to="/dashboard">
            <ListItem
              ripple={false}
              className="hover:!bg-transparent hover:text-teal-400 focus:!bg-transparent hover:translate-x-1"
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <hr className="w-full" />
        

        </List>
        <Button onClick={handleLogout} className="mt-3 ml-5" size="sm">
          Logout
        </Button>
      </Drawer>
    </>
  );
}
