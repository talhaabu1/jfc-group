import { createBrowserRouter } from "react-router-dom";
import Layout from "@/page/Layout";
import HomePage from "@/page/HomePage";
import AddCustomer from "@/page/Customer/AddCustomer";
import AddDriver from "@/page/Driver/AddDriver";
import AddHelper from "@/page/Helper/AddHelper";
import CreateBilling from "@/page/Tractor/CreateBilling";
import BillingList from "@/page/Tractor/BillingList";

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
        path: "createBilling",
        element: <CreateBilling />,
      },
      {
        path: "billingList",
        element: <BillingList />,
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
