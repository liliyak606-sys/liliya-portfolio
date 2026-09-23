import { Search, Target, PenTool, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    { num: '01', title: 'DISCOVER', desc: 'Understanding goals, users, and the problem in depth.', icon: Search },
    { num: '02', title: 'DEFINE', desc: 'Research, analyze, and turn insights into clear direction.', icon: Target },
    { num: '03', title: 'DESIGN', desc: 'Designing intuitive interfaces with clarity and purpose.', icon: PenTool },
    { num: '04', title: 'DEVELOP', desc: 'Collaborating with developers to bring ideas to life.', icon: Code },
    { num: '05', title: 'DELIVER', desc: 'Testing, refining, and launching seamless digital experiences.', icon: Rocket },
  ];

  return (
    <section className="px-8 lg:px-16 py-20 max-w-[1600px] mx-auto border-t border-black/10">
      <h2 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-16">My Design Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative group">
            {i !== steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-[1px] border-b border-dashed border-black/20 -z-10"></div>
            )}
            <div className="text-[10px] font-bold tracking-widest text-[#1E90FF] mb-4">{step.num} <span className="text-gray-500 group-hover:text-[#1E90FF] transition-colors">{step.title}</span></div>
            <p className="text-xs text-gray-600 mb-8 min-h-[60px] pr-4 leading-relaxed font-light">{step.desc}</p>
            <div className="w-10 h-10 rounded-full flex items-center justify-start text-black/40 group-hover:text-[#1E90FF] transition-colors">
               <step.icon className="w-5 h-5 stroke-[1.5]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
