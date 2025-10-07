import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        {/* Hero Section with school image */}
        <section
          className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/image1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-white max-w-2xl px-4">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold">
              Welcome to AGSS Student Portal
            </h1>
            <p className="font-poppins mt-4 text-lg">
              A simple and modern platform for students, teachers, and administrators.
            </p>
            <Link
              to="/login"
              className="font-poppins mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Features Section */}
       {/* Features Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="font-poppins text-3xl font-bold text-blue-700 mb-12"> Features</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {/* Feature 1 */}
      <div className="font-roboto p-6 rounded-lg shadow-md hover:shadow-xl transition bg-blue-100 text-black">
        <h3 className="text-xl font-semibold mb-2"> Academic Results</h3>
        <p>View and track your grades and GPA progress easily.</p>
      </div>

      {/* Feature 2 */}
      <div className="font-roboto p-6 rounded-lg shadow-md hover:shadow-xl transition bg-yellow-100 text-black">
        <h3 className="text-xl font-semibold mb-2"> Class Schedules</h3>
        <p>Stay updated with weekly timetables and upcoming events.</p>
      </div>

      {/* Feature 3 */}
      <div className="font-roboto p-6 rounded-lg shadow-md hover:shadow-xl transition bg-blue-100 text-black">
        <h3 className="text-xl font-semibold mb-2"> Announcements</h3>
        <p>Never miss important updates from administrators and teachers.</p>
      </div>

      {/* Feature 4 */}
      <div className="font-roboto p-6 rounded-lg shadow-md hover:shadow-xl transition bg-yellow-100 text-black">
        <h3 className="text-xl font-semibold mb-2">Teacher Feedback</h3>
        <p>Receive personalized feedback and performance insights.</p>
      </div>

      {/* Feature 5 */}
      <div className="font-roboto p-6 rounded-lg shadow-md hover:shadow-xl transition bg-blue-100 text-black">
        <h3 className="text-xl font-semibold mb-2"> Opportunities</h3>
        <p>Explore scholarships, competitions, and student programs.</p>
      </div>

      {/* Feature 6 */}
      <div className="font-roboto p-6 rounded-lg shadow-md hover:shadow-xl transition bg-yellow-100 text-black">
        <h3 className="text-xl font-semibold mb-2">Notifications</h3>
        <p>Get real-time alerts on your dashboard about school activities.</p>
      </div>
    </div>
  </div>
</section>

      </main>
      
    </>
  );
}

export default Home;

