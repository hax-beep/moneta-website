import Link from 'next/link';

// Sample event data - in a real app, this would come from an API
const events = [
  {
    id: 1,
    title: "Hackathon 2025",
    category: "Coding",
    description: "A 24-hour coding competition where participants build innovative solutions to real-world problems.",
    date: "2025-03-15",
    time: "09:00 AM",
    location: "Main Auditorium",
    image: "/hackathon.jpg"
  },
  {
    id: 2,
    title: "Robo Wars",
    category: "Robotics",
    description: "Design and build your own robot to compete in an epic battle of strength and strategy.",
    date: "2025-03-16",
    time: "02:00 PM",
    location: "Engineering Block",
    image: "/robowars.jpg"
  },
  {
    id: 3,
    title: "Tech Talk Series",
    category: "Seminars",
    description: "Insightful talks by industry leaders on emerging technologies and future trends.",
    date: "2025-03-17",
    time: "11:00 AM",
    location: "Conference Hall",
    image: "/techtalk.jpg"
  },
  {
    id: 4,
    title: "Coding Competition",
    category: "Coding",
    description: "Test your coding skills in this individual programming challenge.",
    date: "2025-03-16",
    time: "10:00 AM",
    location: "Computer Lab 1",
    image: "/coding.jpg"
  },
  {
    id: 5,
    title: "AI Workshop",
    category: "Workshop",
    description: "Hands-on workshop on building AI models using Python and TensorFlow.",
    date: "2025-03-15",
    time: "01:00 PM",
    location: "AI Lab",
    image: "/ai-workshop.jpg"
  },
  {
    id: 6,
    title: "Tech Expo",
    category: "Exhibition",
    description: "Showcase of innovative projects by students and startups.",
    date: "2025-03-17",
    time: "10:00 AM - 5:00 PM",
    location: "Main Ground",
    image: "/expo.jpg"
  }
];

export default function EventsPage() {
  // Group events by category
  const eventsByCategory = events.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <div className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-dark-blue mb-4">Events</h1>
          <div className="w-24 h-1 bg-light-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto">
            Explore our exciting lineup of technical and non-technical events designed to challenge and inspire participants of all skill levels.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 rounded-full bg-dark-blue text-white">All</button>
          {Object.keys(eventsByCategory).map((category) => (
            <button 
              key={category}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-light-blue flex items-center justify-center text-white font-bold text-xl">
                {event.title}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-light-blue bg-blue-50 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark-blue">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                  <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <Link 
                  href={`/events/${event.id}`}
                  className="inline-block w-full text-center px-4 py-2 bg-light-green text-charcoal-grey rounded-md hover:bg-dark-green hover:text-white transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <button className="px-6 py-2 border-2 border-dark-blue text-dark-blue rounded-md hover:bg-dark-blue hover:text-white transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
