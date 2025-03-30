import { Link } from 'react-router-dom';

const DonateSection = () => {
  return (
    <section className="py-16 bg-accent-green/10">
      <div className="container mx-auto px-6">
        <div className="bg-secondary rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full min-h-[300px]">
              <img 
                src="/images/rumaenien/_V9A4231.jpeg" 
                alt="Hund, der durch Spenden geholfen wurde" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-lg font-medium text-white/80 mb-2 font-futura uppercase">SPENDEN</h3>
              <h2 className="text-3xl font-bold text-white mb-6 font-glorious">Unterstütze unsere Mission</h2>
              <p className="text-white/80 mb-6 font-futura">
                Deine großzügige Spende hilft uns, unsere Aufgabe fortzusetzen, Straßenhunde zu kastrieren,
                Hunde in Not zu retten und zu rehabilitieren. Jeder Beitrag macht einen Unterschied im Leben
                eines Hundes.
              </p>
              <p className="text-white/80 mb-6 font-futura">
                Dank Spendenbescheinigungen, die wir als eingetragener gemeinnütziger Verein ausstellen
                dürfen, kannst du deine Unterstützung steuerlich absetzen.
              </p>
              <Link 
                to="/donate" 
                className="bg-white hover:bg-gray-100 text-secondary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block w-fit font-futura"
              >
                Jetzt spenden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
