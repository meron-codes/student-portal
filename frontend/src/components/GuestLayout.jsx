// src/components/GuestLayout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GuestLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="p-8">{children}</main>
      <Footer />
    </>
  );
}
