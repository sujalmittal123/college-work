import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">JG University</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link href="#programs" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Programs</Link>
              <Link href="#campus" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Campus</Link>
              <Link href="#apply" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Apply Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px] opacity-20 -z-10 pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Future Ready <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">New Age University</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Experiential learning, industry exposure, and interdisciplinary education designed to make you employable and empower self-employment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#programs" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Explore Programs
          </Link>
          <Link href="#tour" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
            Virtual Campus Tour
          </Link>
        </div>
      </section>

      {/* Campus / Tour Section */}
      <section id="campus" className="py-24 bg-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Campus</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">Experience a state-of-the-art facility designed for innovation, collaboration, and modern learning.</p>
          <div id="tour" className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-300 shadow-inner scroll-mt-24">
            <div className="text-slate-500 font-medium">
              <span className="text-4xl block mb-2">🏫</span>
              Interactive Campus Tour Experience
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Trusted by leading industry partners</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 grayscale">
            {/* Logos placeholders */}
            <div className="text-xl font-bold font-serif">TechCorp</div>
            <div className="text-xl font-bold font-sans">GlobalFin</div>
            <div className="text-xl font-bold font-mono">Innovate.io</div>
            <div className="text-xl font-bold">FutureBuild</div>
            <div className="text-xl font-bold italic">HealthPlus</div>
          </div>
        </div>
      </section>

      {/* About / Why JG */}
      <section id="about" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose JG University?</h2>
            <p className="text-lg text-slate-600">We bridge the gap between traditional education and modern industry demands through our tech-driven approach.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Experiential Learning', desc: 'Learn by doing with real-world projects, live labs, and continuous industry interactions.', icon: '🧪' },
              { title: 'Interdisciplinary Edge', desc: 'Combine tech, business, and design. Build a unique skill profile that stands out.', icon: '🔄' },
              { title: 'Career Outcomes', desc: 'Dedicated focus on employability and entrepreneurship from day one.', icon: '🚀' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section id="programs" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Flagship Programs</h2>
              <p className="text-lg text-slate-600">Future-proof degrees designed with industry leaders.</p>
            </div>
            <Link href="#programs" className="hidden md:inline-flex text-blue-600 font-semibold hover:text-blue-700 items-center">
              View all programs <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'B.Tech in AI & Data Science', duration: '4 Years', type: 'Undergraduate', color: 'from-blue-500 to-cyan-400' },
              { name: 'BBA in Digital Business', duration: '3 Years', type: 'Undergraduate', color: 'from-indigo-500 to-purple-400' },
              { name: 'MBA in Tech Management', duration: '2 Years', type: 'Postgraduate', color: 'from-emerald-500 to-teal-400' },
              { name: 'B.Des in UX/UI', duration: '4 Years', type: 'Undergraduate', color: 'from-orange-500 to-pink-400' }
            ].map((prog, i) => (
              <div key={i} className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl transition-all overflow-hidden cursor-pointer">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${prog.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`}></div>
                <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">{prog.type}</div>
                <h3 className="text-2xl font-bold mb-2">{prog.name}</h3>
                <p className="text-slate-500 mb-6">{prog.duration} • Full Time</p>
                <div className="inline-flex items-center text-slate-800 font-medium group-hover:text-blue-600 transition-colors">
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "The industry exposure I got in my 2nd year landed me a pre-placement offer. The curriculum is incredibly relevant.", author: "Priya S.", role: "B.Tech AI '24" },
              { quote: "Incubation support at JG University helped me launch my own startup right after graduation. Truly a new age university.", author: "Rahul M.", role: "Founder, TechFlow" },
              { quote: "The experiential learning approach completely changed how I look at problem-solving. It's not just theory here.", author: "Anita K.", role: "BBA '23" }
            ].map((test, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl">
                <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
                <p className="text-lg text-slate-300 italic mb-6">"{test.quote}"</p>
                <div>
                  <div className="font-bold">{test.author}</div>
                  <div className="text-slate-400 text-sm">{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application / CTA */}
      <section id="apply" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to shape your future?</h2>
          <p className="text-xl text-blue-100 mb-10">Join a community of innovators, builders, and leaders. Admissions are now open for the upcoming academic year.</p>
          <Link href="#apply" className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            Begin Your Application
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-slate-800 mb-4">JG University</div>
            <p className="text-slate-500 mb-4">A future-ready, tech-driven university focused on real-world outcomes.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Academics</h4>
            <ul className="space-y-2 text-slate-500">
              <li><Link href="#programs" className="hover:text-blue-600">Undergraduate</Link></li>
              <li><Link href="#programs" className="hover:text-blue-600">Postgraduate</Link></li>
              <li><Link href="#programs" className="hover:text-blue-600">Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Campus</h4>
            <ul className="space-y-2 text-slate-500">
              <li><Link href="#tour" className="hover:text-blue-600">Life at JGU</Link></li>
              <li><Link href="#tour" className="hover:text-blue-600">Facilities</Link></li>
              <li><Link href="#about" className="hover:text-blue-600">Incubation Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-500">
              <li>Admissions: 1800-123-4567</li>
              <li>Email: info@jgu.edu</li>
              <li>Location: Tech Park, City</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} JG University. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
