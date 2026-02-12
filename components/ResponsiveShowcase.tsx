import React from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink, ChevronLeft } from 'lucide-react';

interface ResponsiveShowcaseProps {
    onBack: () => void;
}

export const ResponsiveShowcase: React.FC<ResponsiveShowcaseProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#0F172A] text-white p-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                            Responsive Design Showcase
                        </h1>
                        <p className="text-gray-400">Preview your website across different device breakpoints</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                        <div className="px-4 py-2 bg-amber-500 text-black rounded-md flex items-center gap-2 text-sm font-medium">
                            <Monitor size={16} /> Desktop
                        </div>
                        <div className="px-4 py-2 hover:bg-white/5 rounded-md flex items-center gap-2 text-sm text-gray-400 transition-colors">
                            <Tablet size={16} /> Tablet
                        </div>
                        <div className="px-4 py-2 hover:bg-white/5 rounded-md flex items-center gap-2 text-sm text-gray-400 transition-colors">
                            <Smartphone size={16} /> Mobile
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-24 pb-24">
                {/* Desktop Preview */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Monitor className="text-amber-400" />
                        <h2 className="text-xl font-semibold">Desktop Layout</h2>
                        <span className="text-sm text-gray-500 ml-2">1920px Full Experience</span>
                    </div>
                    <div className="relative group">
                        {/* Realistic Browser Frame */}
                        <div className="bg-[#1E293B] rounded-t-xl border-x border-t border-white/10 p-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="bg-black/20 px-4 py-1 rounded-md text-xs text-gray-400 flex-1 mx-4 border border-white/5 flex items-center justify-between">
                                digital-it-media-solutions.com
                                <ExternalLink size={12} className="opacity-50" />
                            </div>
                        </div>
                        <div className="w-full h-[600px] bg-white rounded-b-xl overflow-hidden shadow-2xl border-x border-b border-white/10 ring-1 ring-white/5">
                            <iframe
                                src="/"
                                className="w-full h-full border-none pointer-events-none"
                                title="Desktop View"
                            />
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Tablet Preview */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Tablet className="text-amber-400" />
                            <h2 className="text-xl font-semibold">Tablet Layout</h2>
                            <span className="text-sm text-gray-500 ml-2">768px - 1024px Adjusted</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative border-[12px] border-[#1E293B] rounded-[3rem] w-[450px] h-[600px] shadow-2xl ring-1 ring-white/10 overflow-hidden bg-white">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1E293B] rounded-b-2xl z-10"></div>
                                <iframe
                                    src="/"
                                    className="w-full h-full border-none scale-[1] origin-top pointer-events-none mt-4"
                                    title="Tablet View"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Mobile Preview */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Smartphone className="text-amber-400" />
                            <h2 className="text-xl font-semibold">Mobile Layout</h2>
                            <span className="text-sm text-gray-500 ml-2">375px Stacked Layout</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative border-[8px] border-[#1E293B] rounded-[2.5rem] w-[300px] h-[600px] shadow-2xl ring-1 ring-white/10 overflow-hidden bg-white">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1E293B] rounded-b-xl z-10"></div>
                                <iframe
                                    src="/"
                                    className="w-full h-full border-none pointer-events-none mt-2"
                                    title="Mobile View"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
