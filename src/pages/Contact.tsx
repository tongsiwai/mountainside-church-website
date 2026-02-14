import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-secondary" />
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Address */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
                <p className="text-gray-700 mb-2">1 Harris Road</p>
                <p className="text-gray-700 mb-2">Mount Wellington</p>
                <p className="text-gray-700 mb-4">Auckland 1051</p>
                <p className="text-gray-600">Look for the big yellow building!</p>
              </div>

              {/* Contact Details */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-1">Email</p>
                    <a href="mailto:info@mountainside.co.nz" className="text-primary hover:text-primary-dark font-medium">
                      info@mountainside.co.nz
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Phone</p>
                    <a href="tel:+6495773064" className="text-primary hover:text-primary-dark font-medium">
                      +64 9 577 3064
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Worship Times */}
            <div className="bg-primary/10 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Worship With Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">English Service</h3>
                  <p className="text-lg">Sundays at 10:00 AM</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">Chinese Service</h3>
                  <p className="text-lg">Saturdays at 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8!2d174.8457!3d-36.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4f1c0c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2s1%20Harris%20Road%2C%20Mount%20Wellington%2C%20Auckland%201051!5e0!3m2!1sen!2snz!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mountainside Lutheran Church Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
