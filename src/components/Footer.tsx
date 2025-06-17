const Footer = () => {
  return (
    <footer className="bg-mdm-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start mb-4">
              {/* Larger Logo */}
              <img
                src="/uploads/footer logo.png"
                alt="MDM Consulting Logo"
                className="h-19 w-auto mb-2" // Increased from h-16 to h-24
                style={{ maxHeight: '45px' }} // Adjusted for clarity
              />
              <span className="text-mdm-gold font-satoshi font-semibold text-base md:text-lg">
                Mission Driven Marketing
              </span>
            </div>
            <p className="text-gray-300 font-satoshi mb-4 max-w-md">
              Mission Driven Marketing - Where Purpose Meets Performance. 
              Delivering meaningful, measurable, and memorable marketing solutions.
            </p>
            <div className="text-mdm-gold font-satoshi font-semibold">
              info@mdmconsulting.com
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-satoshi mb-4 text-mdm-gold">Services</h3>
            <ul className="space-y-2 font-satoshi text-gray-300">
              <li><a href="#" className="hover:text-mdm-gold transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-mdm-gold transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-mdm-gold transition-colors">Media Production</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold font-satoshi mb-4 text-mdm-gold">Company</h3>
            <ul className="space-y-2 font-satoshi text-gray-300">
              <li><a href="#" className="hover:text-mdm-gold transition-colors">About</a></li>
              <li><a href="#" className="hover:text-mdm-gold transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-mdm-gold transition-colors">Clients</a></li>
              <li><a href="#" className="hover:text-mdm-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 font-satoshi">
          <p>&copy; 2024 MDM Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
