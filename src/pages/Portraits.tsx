export function Portraits() {
  const images = Array.from({ length: 30 }, (_, i) => `/portraits/image${i + 1}.jpg`);

  return (
    <div>
      <div className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Portrait Photography</h1>
          <p className="text-xl">Capturing personalities and emotions through portraits</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-square">
              <img src={src} alt={`Portrait ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
