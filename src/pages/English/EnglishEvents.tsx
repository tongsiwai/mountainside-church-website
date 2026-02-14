import { Calendar, Clock, MapPin } from 'lucide-react';

const EnglishEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Combined Worship Service",
      date: "March 16, 2026",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us for a special combined English & Chinese worship service with shared communion."
    },
    {
      id: 2,
      title: "Easter Sunday Celebration",
      date: "April 5, 2026",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Celebrate the resurrection of our Lord with bilingual Easter service, special music, and fellowship lunch."
    },
    {
      id: 3,
      title: "Church Family Picnic",
      date: "May 10, 2026",
      time: "12:00 PM",
      location: "Cornwall Park",
      description: "Annual outdoor gathering for all members and families. Bring your picnic blanket and enjoy fellowship in nature."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-secondary" />
          <h1 className="text-5xl font-bold mb-4">English Section Events</h1>
          <p className="text-xl">Stay connected with upcoming activities and gatherings</p>
        </div>
      </section>

      {/* Regular Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Weekly Activities</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sunday Worship</h3>
              <div className="flex items-center text-gray-700 mb-2">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>Every Sunday at 10:00 AM</span>
              </div>
              <p className="text-gray-600">Traditional Lutheran liturgy with contemporary elements and fellowship after service.</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Bible Study</h3>
              <div className="flex items-center text-gray-700 mb-2">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>After Sunday service</span>
              </div>
              <p className="text-gray-600">Adult Sunday School and topical Bible studies for deeper understanding of Scripture.</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Small Groups</h3>
              <div className="flex items-center text-gray-700 mb-2">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>Various times</span>
              </div>
              <p className="text-gray-600">Connect with others throughout the week for fellowship, prayer, and Bible study.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4 text-gray-700">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Want to receive updates about upcoming events and activities? 
            Contact us to join our mailing list or follow us on social media.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default EnglishEvents;
