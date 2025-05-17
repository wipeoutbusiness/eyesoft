export function Athletics() {
  const images = Array.from({ length: 30 }, (_, i) => `/athletics/image${i + 1}.jpg`);

  return (
    <div>
      <div className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Athletic Photography</h1>
          <p className="text-xl">Showcasing the power and dedication of athletes</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-square">
              <img src={src} alt={`Athletic shot ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
