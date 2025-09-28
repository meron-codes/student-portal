import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
        <div className="mt-6 text-gray-600">
          <p><strong>Email:</strong> info@studentportal.com</p>
          <p><strong>Phone:</strong> +251-900-000-000</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
