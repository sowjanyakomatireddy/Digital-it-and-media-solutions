
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    q: "How long will it take to complete a project?",
    a: "Basic websites typically take 7-10 days. Larger projects like management software or full branding suites can take 3-4 months depending on requirements."
  },
  {
    q: "Do you provide support after delivery?",
    a: "Yes, we provide 1-3 months of free maintenance support for all web projects and offer affordable long-term support plans."
  },
  {
    q: "Can we update the content later ourselves?",
    a: "Absolutely! We build websites on user-friendly platforms and provide basic training so you can manage your text and images easily."
  },
  {
    q: "Is hosting and domain included?",
    a: "We help you select and set up the best hosting/domain services. While they are separate costs, we handle the technical setup for you."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-16 max-w-4xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-[#1A1A1A]">Got Questions?</h2>
        <p className="text-gray-400 font-medium">Common doubts answered to help you move forward with confidence.</p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-8 flex items-center justify-between text-left"
            >
              <span className="text-xl font-black text-gray-900">{item.q}</span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-[#FBBF24] text-black' : 'bg-gray-50 text-gray-400'}`}>
                {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <p className="text-gray-500 font-bold leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
