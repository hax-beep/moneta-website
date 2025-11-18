export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-dark-blue mb-4">About TechFest 2025</h1>
          <div className="w-24 h-1 bg-light-green mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-dark-blue mb-4">Our Story</h2>
            <p className="mb-6">
              TechFest was founded with a vision to create a platform where technology enthusiasts, students, and professionals could come together to share knowledge, showcase innovations, and foster collaborations. Since our inception, we have grown to become one of the most anticipated technical festivals in the region.
            </p>
            <p>
              Our mission is to bridge the gap between academia and industry, providing participants with opportunities to learn from experts, work on real-world problems, and network with like-minded individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark-blue mb-3">Our Vision</h3>
              <p>
                To be the premier platform for technological innovation and knowledge sharing, inspiring the next generation of tech leaders and innovators.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark-blue mb-3">Our Mission</h3>
              <p>
                To provide a collaborative environment that fosters learning, innovation, and professional growth in the field of technology.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-dark-blue mb-6 text-center">Key Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { number: '50+', text: 'Events' },
                { number: '100+', text: 'Speakers' },
                { number: '5000+', text: 'Participants' },
                { number: '3', text: 'Days' },
                { number: '50+', text: 'Colleges' },
                { number: '20+', text: 'Workshops' },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-dark-blue">{item.number}</div>
                  <div className="text-gray-600">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
