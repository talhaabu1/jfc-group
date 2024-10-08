import { createBrowserRouter } from "react-router-dom";
import Layout from "@/page/Layout";
import HomePage from "@/page/HomePage";
import AddReport from "@/page/Tractor/AddReport";

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
    ],
  },
]);

export default router;
