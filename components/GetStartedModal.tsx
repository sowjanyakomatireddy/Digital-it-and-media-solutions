import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, AlertCircle, Building2, Briefcase } from 'lucide-react';

interface GetStartedModalProps {
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

    try {
      // Construct WhatsApp message
      const message = `*New Message Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Business Type:* ${formData.businessType}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;

      const whatsappUrl = `https://wa.me/919652352635?text=${message}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        businessType: '',
        service: '',
        message: ''
      });

      // Auto-close after 3.5 seconds on success
      setTimeout(onClose, 3500);
    } catch (err: any) {
      setErrors({ form: "Failed to submit. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#FDFCF8] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-400 hover:text-black hover:rotate-90 transition-all p-2 z-10"
        >
          <X className="w-8 h-8" />
        </button>

        {isSuccess ? (
          <div className="p-16 text-center space-y-8 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-[#A0D4D2] rounded-full mx-auto flex items-center justify-center shadow-xl shadow-teal-500/10">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-[#1A1A1A]">Thanks for reaching out!</h2>
              <p className="text-gray-400 font-medium text-lg">Our team will call you shortly.</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row h-full">
            {/* Left Decorative Side */}
            <div className="hidden lg:flex w-1/3 bg-[#FBBF24] p-12 flex-col justify-between text-black">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
                  <img
                    src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1770092496/image_xr4lqg.png"
                    alt="Digital IT & Media Logo"
                    className="w-full h-full object-cover scale-[1.3] transform-gpu"
                  />
                </div>
                <h3 className="text-3xl font-black leading-tight">Empower Your Brand.</h3>
                <p className="text-sm font-bold opacity-70">Join 80+ businesses already growing with Digital IT & Media.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-black" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Global Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-black" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Creative Intelligence</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[85vh]">
              <div className="space-y-2 mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">Let’s Grow Your Business</h2>
                <p className="text-gray-400 text-sm font-medium">Tell us about your requirements and we’ll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name*</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-white border-2 rounded-2xl py-4 px-6 focus:outline-none font-bold transition-all ${errors.name ? 'border-red-500' : 'border-gray-50 focus:border-[#FBBF24]'}`}
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number*</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-white border-2 rounded-2xl py-4 px-6 focus:outline-none font-bold transition-all ${errors.phone ? 'border-red-500' : 'border-gray-50 focus:border-[#FBBF24]'}`}
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-white border-2 rounded-2xl py-4 px-6 focus:outline-none font-bold transition-all ${errors.email ? 'border-red-500' : 'border-gray-50 focus:border-[#FBBF24]'}`}
                    placeholder="john@company.com"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Business Type</label>
                    <div className="relative">
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full appearance-none bg-white border-2 border-gray-50 rounded-2xl py-4 px-6 focus:outline-none font-bold transition-all focus:border-[#FBBF24]"
                      >
                        <option value="">Select Type</option>
                        <option value="School">School / Education</option>
                        <option value="Hospital">Hospital / Healthcare</option>
                        <option value="Restaurant">Restaurant / Cafe</option>
                        <option value="Other">Other</option>
                      </select>
                      <Building2 className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Required Service</label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full appearance-none bg-white border-2 border-gray-50 rounded-2xl py-4 px-6 focus:outline-none font-bold transition-all focus:border-[#FBBF24]"
                      >
                        <option value="">Select Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Brand Building">Brand Building</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Ads">SEO & Paid Ads</option>
                        <option value="Video Production">Video Production</option>
                      </select>
                      <Briefcase className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project or goals..."
                    rows={3}
                    className="w-full bg-white border-2 border-gray-50 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FBBF24] font-bold transition-all resize-none"
                  />
                </div>

                {errors.form && (
                  <div className="flex items-center gap-2 text-red-500 font-bold text-xs bg-red-50 p-4 rounded-2xl">
                    <AlertCircle className="w-4 h-4" />
                    {errors.form}
                  </div>
                )}

                <button
                  disabled={isSubmitting}
                  className={`w-full bg-[#1A1A1A] text-white py-6 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 transition-all hover:bg-[#FBBF24] hover:text-black group ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {isSubmitting ? 'Processing...' : 'Request a Message'}
                  {!isSubmitting}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};