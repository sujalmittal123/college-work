'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">JG University</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link href="#programs" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Programs</Link>
              <Link href="#campus" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Campus</Link>
              <Link href="#apply" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Apply Now</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">About</Link>
            <Link href="#programs" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Programs</Link>
            <Link href="#campus" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Campus</Link>
            <Link href="#apply" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md">Apply Now</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-400 to-purple-300 rounded-full blur-[140px] opacity-30 -z-10 pointer-events-none"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 border border-blue-200 shadow-sm">Admissions Open 2024-25</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8">
          Future Ready <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">New Age University</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Experiential learning, industry exposure, and interdisciplinary education designed to make you employable and empower self-employment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#programs" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
            Explore Programs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link href="#tour" className="bg-white/50 backdrop-blur hover:bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center">
            Virtual Campus Tour
          </Link>
        </div>

        {/* Stats Strip in Hero */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-10 border-t border-slate-200/60">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-800">15+</div>
            <div className="text-sm text-slate-500 mt-1 font-medium">Industry Partners</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-800">92%</div>
            <div className="text-sm text-slate-500 mt-1 font-medium">Placement Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-800">40+</div>
            <div className="text-sm text-slate-500 mt-1 font-medium">Expert Faculty</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-800">25+ Acres</div>
            <div className="text-sm text-slate-500 mt-1 font-medium">Campus Area</div>
          </div>
        </div>
      </section>

      {/* Campus / Tour Section */}
      <section id="campus" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Campus</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">Experience a state-of-the-art facility designed for innovation, collaboration, and modern learning.</p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div id="tour" className="relative aspect-video bg-slate-900 rounded-[2rem] flex items-center justify-center overflow-hidden border border-slate-800 shadow-2xl scroll-mt-24">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/80"></div>
              
              <div className="relative z-10 text-center text-white">
                <button className="w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-110 border border-white/30 shadow-xl">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <div className="text-2xl font-bold mb-2">Interactive Campus Tour</div>
                <p className="text-blue-200">Explore classrooms, labs, and recreation areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by leading industry partners</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 hover:opacity-80 transition-opacity grayscale">
            <div className="text-2xl font-bold font-serif">TechCorp</div>
            <div className="text-2xl font-bold font-sans">GlobalFin</div>
            <div className="text-2xl font-bold font-mono tracking-tighter">Innovate.io</div>
            <div className="text-2xl font-extrabold">FutureBuild</div>
            <div className="text-2xl font-bold italic">HealthPlus</div>
          </div>
        </div>
      </section>

      {/* About / Why JG */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose JG University?</h2>
            <p className="text-lg md:text-xl text-slate-600">We bridge the gap between traditional education and modern industry demands through our tech-driven approach.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Experiential Learning', desc: 'Learn by doing with real-world projects, live labs, and continuous industry interactions. No more passive lectures.', icon: '🧪', bg: 'bg-blue-50', color: 'text-blue-600' },
              { title: 'Interdisciplinary Edge', desc: 'Combine tech, business, and design. Build a unique skill profile that stands out in the modern workforce.', icon: '🔄', bg: 'bg-indigo-50', color: 'text-indigo-600' },
              { title: 'Career Outcomes', desc: 'Dedicated focus on employability and entrepreneurship from day one, with incubation support for founders.', icon: '🚀', bg: 'bg-purple-50', color: 'text-purple-600' }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center text-3xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section id="programs" className="py-24 bg-slate-50 scroll-mt-20 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Flagship Programs</h2>
              <p className="text-lg md:text-xl text-slate-600">Future-proof degrees designed in collaboration with industry leaders.</p>
            </div>
            <Link href="#programs" className="hidden md:inline-flex text-blue-600 font-bold hover:text-blue-800 items-center text-lg">
              View all programs <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'B.Tech in AI & Data Science', duration: '4 Years', type: 'Undergraduate', color: 'from-blue-500 to-cyan-400', tags: ['Machine Learning', 'Big Data'] },
              { name: 'BBA in Digital Business', duration: '3 Years', type: 'Undergraduate', color: 'from-indigo-500 to-purple-400', tags: ['E-Commerce', 'FinTech'] },
              { name: 'MBA in Tech Management', duration: '2 Years', type: 'Postgraduate', color: 'from-emerald-500 to-teal-400', tags: ['Product Management', 'Strategy'] },
              { name: 'B.Des in UX/UI', duration: '4 Years', type: 'Undergraduate', color: 'from-orange-500 to-pink-400', tags: ['Interaction Design', 'Research'] }
            ].map((prog, i) => (
              <div key={i} className="group relative bg-white rounded-3xl p-8 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${prog.color} opacity-10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-[3] group-hover:opacity-20`}></div>
                
                <div className="relative z-10">
                  <div className="text-sm font-bold text-blue-600 group-hover:text-blue-400 mb-3 uppercase tracking-wide">{prog.type}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{prog.name}</h3>
                  <p className="text-slate-500 group-hover:text-slate-400 mb-6 font-medium">{prog.duration} • Full Time</p>
                  
                  <div className="flex gap-2 mb-8">
                    {prog.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-semibold px-3 py-1 bg-slate-100 group-hover:bg-slate-800 rounded-full text-slate-600 group-hover:text-slate-300">{tag}</span>
                    ))}
                  </div>

                  <div className="inline-flex items-center font-bold text-blue-600 group-hover:text-blue-400 transition-colors">
                    Learn more <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
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
      <section id="apply" className="py-32 relative overflow-hidden text-center scroll-mt-20">
        <div className="absolute inset-0 bg-slate-900 z-0"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-40 z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] opacity-40 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to shape your future?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 font-light max-w-2xl mx-auto">
            Join a community of innovators, builders, and leaders. Admissions are now open for the upcoming academic year.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#apply" className="inline-flex items-center justify-center bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Begin Your Application
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all">
              Contact Admissions
            </Link>
          </div>
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
          <div id="contact" className="scroll-mt-20">
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
