import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  onOpenModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network request
    try {
      // Construct WhatsApp message
      const message = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;

      const whatsappUrl = `https://wa.me/919652352635?text=${message}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-[#FFF5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-black text-[#1A1A1A] leading-tight tracking-tighter">
              Ready to <span className="text-[#FF4D4D]">Scale?</span>
            </h2>
            <p className="text-xl font-bold text-gray-500 max-w-lg leading-relaxed">
              Book a strategic call with our experts and get a customized roadmap for your business growth.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-transparent group-hover:border-[#FF4D4D] transition-all">
                <Phone className="w-8 h-8 text-[#FF4D4D]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Call Us Directly</p>
                <p className="text-2xl font-black text-[#1A1A1A]">+91 9652352635</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-transparent group-hover:border-[#FF4D4D] transition-all">
                <Mail className="w-8 h-8 text-[#FF4D4D]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Email Us</p>
                <p className="text-2xl font-black text-[#1A1A1A]">contact@digitalit.com</p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenModal}
                className="bg-[#1A1A1A] text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#FF4D4D] transition-all shadow-xl hover:shadow-red-500/20 active:scale-95 flex items-center gap-3 group"
              >
                Book a Strategic Call
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/20">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#FF4D4D]/5 blur-3xl rounded-full transform rotate-12" />
          <div className="relative bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-black text-[#1A1A1A]">Send a Quick Message</h3>
                <p className="text-gray-400 text-sm font-bold mt-2">Fields marked with * are required</p>
              </div>

              {isSuccess ? (
                <div className="py-20 text-center space-y-6 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-900">Message Sent!</h4>
                    <p className="text-gray-500 font-medium">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Full Name*</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-[#FDFCF8] border-2 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-100 focus:border-[#FF4D4D]'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs ml-2">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Phone Number*</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-[#FDFCF8] border-2 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-100 focus:border-[#FF4D4D]'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs ml-2">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#FDFCF8] border-2 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-100 focus:border-[#FF4D4D]'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs ml-2">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Select a Service</label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full appearance-none bg-[#FDFCF8] border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:outline-none focus:border-[#FF4D4D]"
                        >
                          <option value="">Select Service</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Brand Identity">Brand Identity</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Tell us about your project*</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-[#FDFCF8] border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:outline-none focus:border-[#FF4D4D] resize-none"
                      />
                    </div>
                  </div>

                  {errors.form && (
                    <div className="flex items-center gap-2 text-red-500 font-bold text-sm bg-red-50 p-3 rounded-xl">
                      <AlertCircle className="w-4 h-4" />
                      {errors.form}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF4D4D] text-white py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#1A1A1A] transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? 'Sending...' : 'Request a Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};