import { createBrowserRouter } from "react-router-dom";
import Layout from "@/page/Layout";
import HomePage from "@/page/HomePage";
import AddReport from "@/page/Tractor/AddReport";
import AddCustomer from "@/page/Customer/AddCustomer";
import AddDriver from "@/page/Driver/AddDriver";
import AddHelper from "@/page/Helper/AddHelper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "addReportTractor",
        element: <AddReport />,
      },
      {
        path: "addCustomer",
        element: <AddCustomer />,
      },
      {
        path: "addDriver",
        element: <AddDriver />,
      },
      {
        path: "addHelper",
        element: <AddHelper />,
      },
    ],
  },
]);

export default router;
