import { Icon, Menu } from "@rsuite/icons";
import { useState } from "react";
import { FaTractor, FaUserCircle, FaUsers } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Heading, IconButton, Nav, Sidenav } from "rsuite";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state for mobile
  // Function to extract active eventKey based on the current path
  const location = useLocation(); // Get the current URL path

  const getActiveKey = () => {
    if (location.pathname === "/") return "1";
    if (location.pathname.startsWith("/addReportTractor")) return "2-1";
    if (location.pathname.startsWith("/addCustomer")) return "4-1";
    if (location.pathname.startsWith("/addDriver")) return "4-2";
    if (location.pathname.startsWith("/addHelper")) return "4-3";
    // Add more conditions based on your routes
    return null;
  };
  return (
    <>
      {/* <div className="flex">
        <div style={{ width: 240 }}>
          <Sidenav defaultOpenKeys={['3', '4']}>
            <Sidenav.Body>
              <Nav activeKey="1">
                <Nav.Item eventKey="1" icon={<Dashboard />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Growth />}>
                  User Group
                </Nav.Item>
                <Nav.Menu eventKey="3" title="Advanced" icon={<Icon />}>
                  <Nav.Item eventKey="3-1">Geo</Nav.Item>
                  <Nav.Item eventKey="3-2">Devices</Nav.Item>
                  <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                  <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                </Nav.Menu>
                <Nav.Menu eventKey="4" title="Settings" icon={<Gear />}>
                  <Nav.Item eventKey="4-1">Applications</Nav.Item>
                  <Nav.Item eventKey="4-2">Channels</Nav.Item>
                  <Nav.Item eventKey="4-3">Versions</Nav.Item>
                  <Nav.Menu eventKey="4-5" title="Custom Action">
                    <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                    <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
        <Outlet />
      </div> */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 transform shadow-lg ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:translate-x-0`}
        >
          <Sidenav defaultOpenKeys={["2"]} className="h-screen">
            <Sidenav.Body>
              <Nav activeKey={getActiveKey()}>
                <Nav.Item
                  eventKey="1"
                  icon={<Icon as={FaUserCircle} />}
                  as={Link}
                  to="/"
                >
                  My Profile
                </Nav.Item>
                <Nav.Menu
                  eventKey="2"
                  icon={<Icon as={FaTractor} />}
                  title="Tractor"
                >
                  <Nav.Item
                    eventKey="2-1"
                    as={Link}
                    to={"/addReportTractor"}
                    // icon={
                    //   <Icon as={IoIosAddCircle} className="mr-2 align-middle" />
                    // }
                  >
                    Add Report
                  </Nav.Item>
                  <Nav.Item eventKey="2-2">Report List</Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="4"
                  title="User"
                  icon={<Icon as={FaUsers} />}
                >
                  <Nav.Item eventKey="4-1" as={Link} to={"/addCustomer"}>
                    Customer
                  </Nav.Item>
                  <Nav.Item eventKey="4-2" as={Link} to={"/addDriver"}>
                    Driver
                  </Nav.Item>
                  <Nav.Item eventKey="4-3" as={Link} to={"/addHelper"}>
                    Helper
                  </Nav.Item>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>

        {/* Content Area */}
        <div className="ml-0 flex-1 md:ml-64">
          <div className="flex items-center justify-between bg-[#F7F7FA] p-2 dark:bg-[#1B1D24]">
            {/* Mobile Menu Button */}
            <span
              className="block md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IconButton icon={<Menu />} size="lg" />
            </span>

            <div className="hidden p-2 md:block"></div>
            <Heading>JFC-GROUP</Heading>
          </div>
          <div className="p-4">
            <Outlet />
          </div>
        </div>

        {/* Overlay (appears when the sidebar is open on mobile) */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
            onClick={() => setIsOpen(false)} // Clicking the overlay closes the sidebar
          />
        )}
      </div>
    </>
  );
};

export default Layout;
