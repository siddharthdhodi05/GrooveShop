import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeScreen from "@screens/HomeScreen";
import Layout from "@components/Layout";
import ErrorScreen from "@screens/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
