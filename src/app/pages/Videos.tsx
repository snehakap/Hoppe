export function Videos() {
  return (
    <div className="min-h-screen bg-white">

      {/* Heading */}
      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight
          text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-slate-500
          [font-family:'Playfair_Display',serif]">
            Our Instagram
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600
          [font-family:'Poppins',sans-serif]">
            Follow our journey and explore our latest terrarium builds and designs.
          </p>
        </div>
      </section>

      {/* Instagram Embed */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Option 1: Embed Instagram Feed */}
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.instagram.com/Hoppe-Terrarienbau-Exclusiv.de/embed"
              className="w-full h-[600px] rounded-2xl border border-slate-200"
              allowTransparency={true}
            ></iframe>
          </div>

          {/* OR Option 2: Button to Instagram (backup) */}
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/Hoppe-Terrarienbau-Exclusiv.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 
              bg-gradient-to-r from-slate-200 to-white text-slate-900
              rounded-lg font-medium
              shadow-lg transition-all duration-300
              hover:scale-105
              hover:shadow-[0_10px_30px_rgba(0,255,150,0.4)]
              hover:from-green-400 hover:to-green-500 hover:text-black"
            >
              View on Instagram
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}