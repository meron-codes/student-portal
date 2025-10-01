function Footer() {
  return (
    <footer className="bg-gray-100 text-black pt-8 pb-4 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Paragraph full width */}
        <p className="font-roboto text-sm md:text-base leading-relaxed mb-4">
          Student Portal helps students access results, announcements, and
          schedules in one place. Stay connected and updated with all your
          academic information anytime, anywhere.
        </p>

        {/* Animated >>> under paragraph */}
        <a
          href="/login"
          className="
          font-poppins
            inline-block px-6 py-2 rounded-2xl
            text-blue-600 font-bold text-3xl
            hover:text-blue-300 
            active:text-black
            transition-colors duration-300
            animate-moveX
          "
        >
          {">>>"}
        </a>
      </div>

      {/* Divider */}
      <div className="font-roboto border-t border-gray-400 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Student Portal. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
