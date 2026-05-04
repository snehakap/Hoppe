export function Products() {
  const projects = [
    {
      title: "Rainforest Terrarium",
      description:
        "A lush tropical environment designed to replicate dense rainforest ecosystems.",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777671427/hero_dpygut.jpg",
    },
    {
      title: "Desert Habitat",
      description:
        "A warm, arid enclosure crafted for reptiles requiring dry climates.",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777754262/hero2_syfkgq.jpg",
    },
    {
      title: "Natural Jungle Build",
      description:
        "A vertical habitat featuring layered vegetation and climbing structures.",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777754262/hero3_rpydqf.jpg",
    },
    {
      title: "Minimalist Display",
      description:
        "A modern enclosure focusing on aesthetics and optimal living conditions.",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777671427/hero_dpygut.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Heading */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight
          text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-slate-500
          [font-family:'Playfair_Display',serif]">
            Our Terrariums
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] md:h-[520px] object-cover
                    transition duration-700 ease-out
                    group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 
                  group-hover:opacity-100 transition duration-500" />
                </div>

                {/* Text */}
                <div className="mt-5">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2
                  [font-family:'Poppins',sans-serif]">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}