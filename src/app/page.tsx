import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-dark-blue to-light-blue text-white p-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to TechFest 2025</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for the most exciting technical festival of the year, featuring innovation, technology, and endless possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/events" 
              className="px-6 py-3 bg-white text-charcoal-grey font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Events
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-dark-blue mb-4">About TechFest</h2>
            <div className="w-24 h-1 bg-light-green mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto">
              TechFest is an annual technical festival that brings together students, professionals, and technology enthusiasts to celebrate innovation and creativity in the field of technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-dark-blue">Innovation</h3>
              <p>Experience cutting-edge technologies and innovative projects from around the world.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-dark-blue">Learning</h3>
              <p>Attend workshops and seminars conducted by industry experts and thought leaders.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-dark-blue">Networking</h3>
              <p>Connect with like-minded individuals and industry professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-dark-blue mb-4">Featured Events</h2>
            <div className="w-24 h-1 bg-light-green mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto">
              Discover a wide range of technical and non-technical events designed to challenge and inspire.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event cards will be mapped from data */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-light-blue"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-dark-blue">Event {item}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the event goes here.</p>
                  <Link href="/events" className="text-light-green hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
