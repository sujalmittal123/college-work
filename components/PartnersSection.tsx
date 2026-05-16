"use client";

export const PartnersSection = () => {
  const partners = [
    "IBM",
    "ISRO",
    "SAC",
    "Yudiz Solutions",
    "Dev Information Technology",
    "Aventure Digital",
    "Asian-African Chambers",
    "Virtual Height IT",
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">
          Trusted by Industry Leaders
        </span>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="flex w-max marquee">
          {duplicatedPartners.map((partner, i) => (
            <div
              key={i}
              className="mx-4 px-8 py-4 bg-slate-50 border border-slate-100 rounded-full font-medium text-slate-600 transition-colors hover:text-[#F5A623] hover:border-[#F5A623]"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
