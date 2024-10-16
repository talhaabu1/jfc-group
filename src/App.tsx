import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { CustomProvider } from "rsuite";

function App() {
  return (
    <>
      <CustomProvider theme="light">
        <RouterProvider router={router} />
      </CustomProvider>
    </>
  );
}

export default App;
