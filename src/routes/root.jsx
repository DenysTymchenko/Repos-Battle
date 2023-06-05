import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Root() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}
