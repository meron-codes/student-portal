import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700">Welcome to Student Portal</h1>
        <p className="mt-4 text-gray-600">
          A simple and modern platform for students, teachers, and administrators.
        </p>
        
        <Link
          to="/login"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Get Started
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Home;
