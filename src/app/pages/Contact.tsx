import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen">

      {/* Heading */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight
          text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-slate-500
          [font-family:'Playfair_Display',serif]">
            Get in Touch
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto
          [font-family:'Poppins',sans-serif]">
            Let's discuss your vision and create something extraordinary together
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-8">
                Send us a message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all">
                    <option>Select a collection</option>
                    <option>Terrarium Collection</option>
                    <option>Aviary Series</option>
                    <option>Aquatic Habitats</option>
                    <option>Small Mammal Homes</option>
                    <option>Custom Build</option>
                    <option>Observatory Collection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">
                      Headquarters
                    </h3>
                    <p className="text-slate-600">
                      1847 Glassworks Avenue<br />
                      Stuttgart, Germany 70173
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-slate-600">
                      +49 711 555 0100<br />
                      +1 (800) HOPPE-GLASS
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">
                      Email
                    </h3>
                    <p className="text-slate-600">
                      info@hoppe-glass.com<br />
                      custom@hoppe-glass.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM CET<br />
                      Saturday: 10:00 AM - 4:00 PM CET<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}