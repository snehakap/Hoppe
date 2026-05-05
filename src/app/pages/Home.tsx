import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        {/* Background Image */}
<img
  src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777993319/Gecko-Hoppe-080425-RZ06-Chrome_3D_und_grey_TxT_gruen-HQ-150725_vukh7q.jpg"
  alt="Hero"
  className="absolute inset-0 w-full h-full object-cover object-[center_80%]"
/>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center animate-fadeIn">
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight 
text-transparent bg-clip-text 
bg-gradient-to-r from-green-400 via-slate-200 to-green-600
drop-shadow-[0_6px_25px_rgba(0,0,0,0.9)]
[font-family:'Playfair_Display',serif]">
  Hoppe Terrarienbau
</h1>

        {/* Subtitle */}
        {/* <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto 
text-slate-200 font-medium 
drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]
[font-family:'Poppins',sans-serif]">
  Hochwertige Terrarien mit einzigartiger Landschaftsgestaltung
</p> */}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Primary Button */}
          <Link
            to="/products"
            className="group px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 
            bg-gradient-to-r from-slate-200 to-white text-slate-900
            shadow-lg transition-all duration-300
            hover:scale-105 
            hover:shadow-[0_10px_30px_rgba(0,255,150,0.4)]
            hover:from-green-400 hover:to-green-500 hover:text-black"
          >
            Explore Collections
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Secondary Button */}
          <Link
            to="/contact"
            className="px-8 py-4 rounded-lg font-medium 
            border-2 border-white text-white 
            backdrop-blur-sm transition-all duration-300
            hover:scale-105
            hover:bg-green-500/20 
            hover:border-green-400 
            hover:shadow-[0_0_20px_rgba(0,255,150,0.5)]"
          >
            Request Consultation
          </Link>

        </div>
      </div>
    </section>

      
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight
text-transparent bg-clip-text 
bg-gradient-to-r from-green-400 to-slate-500
[font-family:'Playfair_Display',serif]">

        Welcome to Hoppe Terrarienbau
      </h2>

      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto
      [font-family:'Poppins',sans-serif]">
        Each enclosure blends precision engineering with natural beauty and lasting quality.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Premium Craftsmanship",
          description:
            "Expertly built terrariums using high-end materials with a refined furniture aesthetic.",
          icon: (
            <>
              <circle cx="12" cy="8" r="4" />
              <path d="M8 14l4 3 4-3" />
              <path d="M10 14v4l2-1 2 1v-4" />
            </>
          ),
        },
        {
          title: "Custom Design",
          description:
            "Every enclosure is uniquely tailored to your vision, space, and animal needs.",
          icon: (
            <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-5 5a2 2 0 0 0 2.8 2.8l5-5a4 4 0 0 0 5.4-5.4l-2.2 2.2-3.2-3.2z" />
          ),
        },
        {
          title: "Fast Delivery",
          description:
            "Reliable and efficient delivery, typically completed within just a few working days.",
          icon: (
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
          ),
        },
      ].map((feature, index) => (
        
        <div
          key={index}
          className="group relative p-10 rounded-3xl text-center
          bg-gradient-to-br from-slate-100 via-white to-slate-200
          border border-slate-200
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          hover:-translate-y-2
          transition-all duration-500"
        >

          {/* Shine */}
          <div className="absolute inset-0 rounded-3xl 
          bg-gradient-to-tr from-white/40 via-transparent to-transparent 
          opacity-30 pointer-events-none" />

          {/* Silver Icon Badge */}
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center 
          rounded-2xl
          bg-gradient-to-br from-slate-300 via-slate-100 to-slate-400
          shadow-[0_10px_25px_rgba(0,0,0,0.15),inset_0_2px_6px_rgba(255,255,255,0.6)]
          border border-slate-200
          group-hover:scale-105
          group-hover:shadow-[0_0_25px_rgba(0,255,150,0.25)]
          transition-all duration-300">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-9 h-9 transition-all duration-300 
              group-hover:drop-shadow-[0_0_8px_rgba(0,255,150,0.6)]"
            >
              {feature.icon}
            </svg>

          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-slate-800 mb-3
          [font-family:'Poppins',sans-serif]">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed
          [font-family:'Poppins',sans-serif]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
     {/* Our Work Section */}
<section className="py-28 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight
text-transparent bg-clip-text 
bg-gradient-to-r from-green-400 to-slate-500
[font-family:'Playfair_Display',serif]">
  Our Work
</h2>

      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto
      [font-family:'Poppins',sans-serif]">
        A glimpse into the terrariums we’ve carefully designed and built.
      </p>
    </div>

    {/* Image Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777671427/hero_dpygut.jpg",
    "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777754262/hero2_syfkgq.jpg",
    "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777754262/hero3_rpydqf.jpg",
    "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777671427/hero_dpygut.jpg", // replace with another real image later
  ].map((img, index) => (
    <div
      key={index}
      className="group relative overflow-hidden
      shadow-[0_10px_30px_rgba(0,0,0,0.1)]
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
      transition-all duration-500"
    >
      <img
        src={img}
        alt="Terrarium"
        className="w-full h-[420px] md:h-[500px] object-cover
        transition duration-700 ease-out
        group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 
      group-hover:opacity-100 transition duration-500" />
    </div>
  ))}
</div>
    {/* Button */}
    <div className="text-center mt-14">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 px-8 py-4 
        bg-gradient-to-r from-slate-200 to-white text-slate-900
        rounded-lg font-medium
        shadow-lg transition-all duration-300
        hover:scale-105
        hover:shadow-[0_10px_30px_rgba(0,255,150,0.4)]
        hover:from-green-400 hover:to-green-500 hover:text-black"
      >
        See More
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>

  </div>
</section>

    </div>
  );
}
