const Gallery = () => (
      <section className="bg-secondary text-white py-16 px-6">
        <h2 className="text-center text-3xl font-bold mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-600 h-40 rounded-lg"></div>
          <div className="bg-gray-600 h-40 rounded-lg"></div>
          <div className="bg-gray-600 h-40 rounded-lg"></div>
          <div className="bg-gray-600 h-40 rounded-lg"></div>
          <div className="bg-gray-600 h-40 rounded-lg"></div>
          <div className="bg-gray-600 h-40 rounded-lg"></div>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-accent text-white rounded-lg">
            See More
          </button>
        </div>
      </section>
    );
    
    export default Gallery;
    