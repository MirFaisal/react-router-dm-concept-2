import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Country from "./components/country/Country";
import Home from "./components/home/Home";
import MainLayout from "./layout/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://restcountries.com/v3.1/all");
          },
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
          loader: async () => {
            return fetch("https://restcountries.com/v3.1/all");
          },
        },
        {
          path: "/country/:name",
          loader: async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
          },
          element: <Country />,
        },
        { path: "/about", element: <About /> },
      ],
    },
    {
      path: "*",
      element: <h1 className="text-7xl text-red-600">Page not found</h1>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
