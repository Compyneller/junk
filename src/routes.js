import About from "./pages/About";
import ContactUsPage from "./pages/ContactUsPage";
import Home from "./pages/Home";

export const routes = [
  {
    component: <Home />,
    link: "/",
  },
  {
    component: <ContactUsPage />,
    link: "/contact-us",
  },
  {
    component: <About />,
    link: "/about",
  },
];
