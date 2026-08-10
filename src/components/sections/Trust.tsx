import { CheckCircle2, Building2, Map, Users } from 'lucide-react';

const credentials = [
  { icon: CheckCircle2, value: '20+', label: 'Years Experience' },
  { icon: Building2, value: '48', label: 'Completed Developments' },
  { icon: Map, value: '2.4M+', label: 'Sq. Ft. Built' },
  { icon: Users, value: '96%', label: 'Client Referral Rate' },
];

export default function Trust() {
  return (
    <section className="py-24 md:py-32 bg-alabaster text-onyx px-5 md:px-10 xl:px-24 border-y border-charcoal/5">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 justify-between items-center">
        
        <div className="w-full md:w-1/3">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-balance">
            Built on trust.<br />
            Proven through delivery.
          </h2>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div key={idx} className="flex flex-col items-start md:items-center text-left md:text-center border-l md:border-l-0 md:border-r border-charcoal/10 pl-6 md:pl-0 md:pr-4 last:border-r-0">
                <Icon className="w-6 h-6 text-champagne mb-6 opacity-80" strokeWidth={1.5} />
                <p className="font-serif text-4xl mb-2">{cred.value}</p>
                <p className="text-xs uppercase tracking-widest font-light text-charcoal/60 leading-relaxed">
                  {cred.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
