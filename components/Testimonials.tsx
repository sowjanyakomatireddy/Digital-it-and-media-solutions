
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Vedant High School",
    role: "Management",
    content: "They designed our school website professionally and on time. Their team is highly responsive and understands educational branding perfectly.",
    rating: 5
  },
  {
    name: "Arogya Hospital",
    role: "Director",
    content: "Excellent SEO services. Our local visibility increased significantly within months. The posters they designed for our campaigns were stunning.",
    rating: 5
  },
  {
    name: "Mayuri Restaurant",
    role: "Owner",
    content: "Great creativity with our menu and social media posters. They bring a fresh perspective to food marketing that really works.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#A0D4D2] py-24 px-6 md:px-16 rounded-[5rem] mx-4 my-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-6xl font-black text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-800/60 font-bold max-w-xl mx-auto uppercase tracking-widest text-xs">Social proof from businesses like yours</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-black/5 space-y-8 relative group hover:-translate-y-2 transition-transform">
              <Quote className="absolute top-8 right-10 w-12 h-12 text-gray-50 group-hover:text-[#FBBF24] transition-colors" />
              <div className="flex gap-1">
                {Array.from({length: t.rating}).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="text-lg font-bold text-gray-900 leading-relaxed">"{t.content}"</p>
              <div className="pt-4 border-t border-gray-50">
                <h4 className="text-xl font-black text-gray-900">{t.name}</h4>
                <p className="text-sm font-bold text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button className="bg-black text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Join Our Happy Clients
          </button>
        </div>
      </div>
    </section>
  );
};
