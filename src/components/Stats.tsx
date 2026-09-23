import { Sparkles, Users, Trophy, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Sparkles, value: '6+', label: 'Years Experience' },
    { icon: Users, value: '40+', label: 'Projects Completed' },
    { icon: Trophy, value: '18+', label: 'Happy Clients' },
    { icon: Globe, value: '12', label: 'Countries Worked With' },
  ];

  return (
    <section className="px-8 lg:px-16 py-8 max-w-[1600px] mx-auto">
      <div className="border-y border-white/10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <stat.icon className="w-6 h-6 text-white mb-6 stroke-[1.5]" />
              <div className="text-4xl lg:text-[3.5rem] font-light tracking-tight text-white mb-3">{stat.value}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
