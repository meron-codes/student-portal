import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Our school management system is built to make learning, teaching,
          and administration more efficient. We provide tools for
          announcements, schedules, results, opportunities, and more.
        </p>
        <p className="text-gray-700">
          <strong>Mission:</strong> To empower students and teachers with
          technology. <br />
          <strong>Vision:</strong> To create a smarter and more connected
          education system.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default About;
