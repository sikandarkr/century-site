export default function Hero() {
    return (
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/farm.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
  
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="bg-black/40 backdrop-blur rounded-xl p-8 max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              No.1 Quality Seeds for Farmers
            </h1>
  
            <p className="mt-3 text-lg">
              Trusted Hybrid Seeds for Better Yield
            </p>
  
            <div className="mt-6 flex gap-4">
              <a
                href="tel:+919876543210"
                className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold"
              >
                Call Now
              </a>
  
              <a
                href="https://wa.me/919876543210"
                className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  