import { Users, BookOpen, Heart, Music } from 'lucide-react';

const EnglishMinistries = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-secondary" />
          <h1 className="text-5xl font-bold mb-4">English Ministries</h1>
          <p className="text-xl">Growing together in faith and fellowship</p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Small Groups */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Small Groups</h2>
              <p className="text-gray-700 mb-4">
                Connect with others in faith through our small group Bible studies. 
                Groups meet throughout the week for fellowship, prayer, and studying God's Word together.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Weekly Bible study groups</li>
                <li>• Prayer partnerships</li>
                <li>• Fellowship gatherings</li>
                <li>• Various meeting times available</li>
              </ul>
            </div>

            {/* Sunday School & Bible Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Sunday School & Bible Study</h2>
              <p className="text-gray-700 mb-4">
                Grow deeper in your understanding of Scripture through systematic Bible study and 
                discussion of Lutheran theology and practice.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Adult Sunday School after service</li>
                <li>• Catechism classes</li>
                <li>• Topical Bible studies</li>
                <li>• Confirmation preparation</li>
              </ul>
            </div>

            {/* Children's Ministry */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Children's Ministry</h2>
              <p className="text-gray-700 mb-4">
                Nurturing young hearts with the love of Christ through age-appropriate 
                lessons, activities, and fellowship during Sunday worship.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Children's activities during worship</li>
                <li>• Bible stories and crafts</li>
                <li>• Special events and celebrations</li>
                <li>• Safe and caring environment</li>
              </ul>
            </div>

            {/* Worship & Music */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Music className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Worship & Music</h2>
              <p className="text-gray-700 mb-4">
                Experience traditional Lutheran liturgy enriched with both historic hymns 
                and contemporary worship songs that praise God and unite us in worship.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Traditional liturgy</li>
                <li>• Hymns and contemporary songs</li>
                <li>• Communion on 1st & 3rd Sundays</li>
                <li>• Fellowship after service</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-primary/10 p-8 rounded-lg max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
              <p className="text-lg text-gray-700 mb-6">
                We'd love to help you find your place in our church family. 
                Whether you're looking for a small group, want to serve, or simply want to learn more, 
                we're here to walk alongside you.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnglishMinistries;
