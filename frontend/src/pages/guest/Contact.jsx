import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Main content */}
      <main className="pt-16 flex flex-col">

        {/* Hero Section */}
        <section className="w-full bg-blue-700 text-white py-20 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Contact Abune Gorgorios School
            </h1>
            <p className="text-lg md:text-xl font-roboto">
              We’re here to help! Reach out to us for any inquiries.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-0">

            {/* Horizontal Flex Container */}
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">

              {/* School Address */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-poppins font-bold text-blue-700 mb-4">
                  School Address
                </h2>
                <p className="text-gray-700 font-roboto leading-relaxed">
                  Abune Gorgorios School<br />
                  Adama, Oromia, Ethiopia
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-poppins font-bold text-blue-700 mb-4">
                  Contact Information
                </h2>
                <ul className="text-gray-700 font-roboto space-y-2">
                  <li><strong>Phone:</strong> +251-900-000-000</li>
                  <li><strong>Email:</strong> info@abunegorgoriosschool.com</li>
                  <li><strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 4:00 PM</li>
                </ul>
              </div>

              {/* Social Media Links */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-poppins font-bold text-blue-700 mb-4">
                  Connect With Us
                </h2>
                <ul className="flex justify-center md:justify-start gap-6 text-gray-700 font-roboto">
                  <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
                  <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                  <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
                  <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
                </ul>
              </div>

            </div>

            {/* Google Map Embed */}
            <div className="mt-16 w-full h-64 md:h-96 shadow rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.836867695703!2d39.252841!3d8.545792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b80d58347d6ef%3A0x4d2d0c8b9b0b6f0!2sAbune%20Gorgorios%20School!5e0!3m2!1sen!2set!4v1696134512345!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abune Gorgorios School Map"
              ></iframe>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;
