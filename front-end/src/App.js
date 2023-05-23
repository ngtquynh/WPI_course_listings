import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./pages/Courses";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import Footer from "./UI/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/courses", element: <Courses /> },
    ]
  },
]);

function App() {
  return (<><RouterProvider router={router} /><Footer/></>);
}

export default App;
