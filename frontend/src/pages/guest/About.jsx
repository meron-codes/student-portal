import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* Main content */}
     <main className=" flex flex-col">

  {/* Hero Section */}
  <section className="relative w-full bg-blue-700 text-white py-20 flex items-center justify-center text-center">
    <div className="max-w-3xl px-4">
      <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
        About AGSS
      </h1>
      <p className="text-lg md:text-xl font-roboto">
        Empowering students and teachers with modern tools for a smarter education
      </p>
    </div>
  </section>

  {/* Full-width background section */}
  <section className="bg-gray-50 py-16">
    <div className="max-w-5xl mx-auto px-4 md:px-0 space-y-16">

      {/* School Description */}
      <section>
        <h2 className="text-3xl font-poppins font-bold text-blue-700 mb-4">
          Our School
        </h2>
        <p className="text-gray-700 font-roboto leading-relaxed">
          AGSS is dedicated to providing a modern, efficient, and inclusive learning environment. 
          Our school management system supports students, teachers, and administrators in organizing schedules, tracking academic progress, and staying informed about all school activities.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-poppins font-semibold mb-2 text-blue-700">Mission</h3>
          <p className="text-gray-700 font-roboto">
            To empower students and teachers with innovative technology that simplifies learning and teaching processes.
          </p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-poppins font-semibold mb-2 text-yellow-700">Vision</h3>
          <p className="text-gray-700 font-roboto">
            To create a smarter, more connected, and highly effective education system for the future.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-3xl font-poppins font-bold text-blue-700 mb-6">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-poppins font-semibold mb-2">Integrity</h4>
            <p className="text-gray-700 font-roboto">We promote honesty, responsibility, and ethical behavior in everything we do.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-poppins font-semibold mb-2">Excellence</h4>
            <p className="text-gray-700 font-roboto">We encourage high standards in academics, teaching, and student development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-poppins font-semibold mb-2">Innovation</h4>
            <p className="text-gray-700 font-roboto">We embrace modern tools and approaches to make learning and teaching more effective.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-poppins font-bold text-blue-700 mb-6">
          Why Choose AGSS?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 font-roboto">
          <li>Modern school management system for easy tracking of schedules, results, and announcements.</li>
          <li>Experienced teachers and staff committed to student success.</li>
          <li>Supportive and inclusive learning environment.</li>
          <li>Opportunities for scholarships, competitions, and student programs.</li>
        </ul>
      </section>

    </div>
  </section>

</main>


      
    </>
  );
}

export default About;
