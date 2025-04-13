import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Heart, PawPrint, DollarSign, Calendar, CreditCard } from 'lucide-react';
import SEO from '@/components/SEO';

const Donate = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const [donationAmount, setDonationAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [activeTab, setActiveTab] = useState<'direct' | 'fundraising'>('direct');

  const predefinedAmounts = [25, 50, 100, 250];

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setDonationAmount(value ? parseInt(value) : null);
    }
  };

  const impactItems = [
    {
      amount: "30 €",
      impact: "Eine Kastration"
    },
    {
      amount: "1 €",
      impact: "Eine Entwurmung"
    },
    {
      amount: "7 €",
      impact: "Eine Parasitenbehandlung (Simparica) für 2 Hunde"
    },
    {
      amount: "20 €",
      impact: "1 Sack Futter (10 kg)"
    },
    {
      amount: "2 €",
      impact: "Eine Mahlzeit für einen Hund in der Fütterungsrunde"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Spenden & Helfen"
        description="Deine Spende hilft uns, Straßenhunde zu kastrieren, medizinisch zu versorgen und ihnen ein besseres Leben zu ermöglichen. Jeder Beitrag macht einen Unterschied!"
        keywords="Tierschutz spenden, Hunde Spende, Tierhilfe unterstützen, Kastrationsprojekte spenden, Tierschutzverein unterstützen, monatlich spenden, Tierschutz Rumänien"
      />
      <Navbar />
      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-accent-pink/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-accent-yellow/10 blur-3xl"></div>
        
        {/* Decorative paws */}
        <div className="absolute top-40 left-10 transform -rotate-12 opacity-10">
          <PawPrint size={60} className="text-primary" />
        </div>
        <div className="absolute bottom-40 right-10 transform rotate-12 opacity-10">
          <PawPrint size={40} className="text-accent-pink" />
        </div>
        <div className="absolute top-1/2 right-1/4 transform rotate-45 opacity-10">
          <PawPrint size={50} className="text-accent-blue" />
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-6 font-glorious">Unterstütze unsere Mission</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-accent-pink via-accent-blue to-accent-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto font-futura">
              Deine großzügige Spende hilft uns, unsere Aufgabe fortzusetzen, Straßenhunde zu kastrieren,
              Hunde in Not zu retten und zu rehabilitieren. Jeder Beitrag macht einen Unterschied im Leben
              eines Hundes.
              Dank Spendenbescheinigungen, die wir als eingetragener gemeinnütziger Verein ausstellen
              dürfen, kannst du deine Unterstützung steuerlich absetzen.
            </p>
          </div>
          
          {/* Donation Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-12 relative">
            {/* Tab background highlight */}
            <div className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-blue transition-all duration-300 ${
              activeTab === 'direct' ? 'left-0 w-1/4' : 'left-1/4 w-1/4'
            }`}></div>
            
            <button
              className={`py-4 px-8 font-medium transition-colors relative font-futura ${
                activeTab === 'direct'
                  ? 'text-primary font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('direct')}
            >
              <span className="flex items-center">
                <CreditCard size={18} className={`mr-2 ${activeTab === 'direct' ? 'text-accent-pink' : 'text-gray-400'}`} />
                Direkte Spende
              </span>
              {activeTab === 'direct' && (
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-accent-pink to-accent-blue"></div>
              )}
            </button>
            <button
              className={`py-4 px-8 font-medium transition-colors relative font-futura ${
                activeTab === 'fundraising'
                  ? 'text-primary font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('fundraising')}
            >
              <span className="flex items-center">
                <DollarSign size={18} className={`mr-2 ${activeTab === 'fundraising' ? 'text-accent-blue' : 'text-gray-400'}`} />
                Fundraising Box
              </span>
              {activeTab === 'fundraising' && (
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-accent-blue to-accent-green"></div>
              )}
            </button>
          </div>

          {activeTab === 'direct' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full bg-gradient-to-br from-accent-pink/10 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-gradient-to-tl from-accent-blue/10 to-transparent pointer-events-none"></div>
                
                <h2 className="text-3xl font-bold text-primary mb-6 font-glorious relative z-10">Jetzt spenden</h2>
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center mr-3">
                      <CreditCard size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary font-futura">Spendenkonto:</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 pl-14 font-futura">
                    <li><strong>Dogs of Lombok e.V.</strong></li>
                    <li><strong>IBAN:</strong> DE 91 8306 5408 0005 3189 55</li>
                    <li><strong>Bank:</strong> Skatbank</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2 italic pl-14 font-futura">
                    (wird noch geändert, aber aktuell läuft es noch auf Dogs of Lombok e.V.)
                  </p>
                </div>
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-green flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.067 8.478c.492.732.695 1.682.576 2.77-.527 3.353-3.502 4.543-6.964 4.543H12.26c-.389 0-.708.3-.764.688l-.65 4.148-.184 1.176c-.077.49.275.94.77.94h3.4c.323 0 .6-.23.647-.548l.025-.136.51-3.23.033-.173c.048-.317.323-.548.646-.548h.406c2.642 0 4.715-.998 5.316-3.882.248-1.197.124-2.196-.427-2.893-.175-.222-.39-.408-.633-.566"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary font-futura">PayPal:</h3>
                  </div>
                  <div className="pl-14">
                    <a 
                      href="https://www.paypal.com/donate/?hosted_button_id=3ELJCXP5LQDTG&fbclid=PAZXh0bgNhZW0CMTEAAabu5I5Oj-9SzlYIgabUoY7yhOwlVQHDCdVDlRb3hsA8njGp3bXgy7G3R0o_aem_ATZFcYsKg9E98LzAeP7Z9BoHbzMKR93S1M3i_VQ0mLQ4G-4BQmq50p1tgTY60JhDdB0Pzr_6oB9kyV9Nrk_23sIg"
                      className="bg-gradient-to-r from-[#0070ba] to-[#005ea6] text-white px-6 py-3 rounded-full font-medium flex items-center justify-center w-full md:w-auto transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300 font-futura"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.067 8.478c.492.732.695 1.682.576 2.77-.527 3.353-3.502 4.543-6.964 4.543H12.26c-.389 0-.708.3-.764.688l-.65 4.148-.184 1.176c-.077.49.275.94.77.94h3.4c.323 0 .6-.23.647-.548l.025-.136.51-3.23.033-.173c.048-.317.323-.548.646-.548h.406c2.642 0 4.715-.998 5.316-3.882.248-1.197.124-2.196-.427-2.893-.175-.222-.39-.408-.633-.566"/>
                        <path d="M18.865 3.932c-.553-.713-1.665-1.022-3.043-1.022h-4.19c-.419 0-.77.3-.835.718L8.94 15.368l-.048.31c.067-.429.408-.748.835-.748h1.75c3.457 0 6.18-1.402 6.973-5.446.023-.108.042-.215.06-.319.235-1.52-.002-2.552-.645-3.233"/>
                        <path d="M9.954 8.452l.24-1.73c.026-.184.103-.34.21-.462a.73.73 0 0 1 .5-.206h3.217c.675 0 1.308.04 1.883.127.16.024.31.052.45.083.143.031.274.066.394.104.038.01.074.021.11.033.187.057.361.12.522.194.266-1.703-.006-2.857-.92-3.903C15.526 1.464 13.693 1 11.505 1H6.087c-.46 0-.853.322-.954.788l-2.85 18.07c-.056.355.198.678.543.733.032.006.066.008.1.008h3.696l.353-2.23 1.3-8.302.679-.615z"/>
                      </svg>
                      Mit PayPal spenden
                    </a>
                  </div>
                </div>
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-yellow to-accent-pink flex items-center justify-center mr-3">
                      <DollarSign size={20} className="text-white" />
                    </div>
                    <p className="text-gray-700 font-medium font-futura">Wähle einen Betrag:</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pl-14">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 rounded-full transition-all font-futura ${
                          donationAmount === amount
                            ? "bg-gradient-to-r from-accent-blue to-accent-green text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {amount} €
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8 relative z-10">
                  <label htmlFor="customAmount" className="text-gray-700 font-medium block mb-3 font-futura pl-14">
                    Oder gib einen eigenen Betrag ein:
                  </label>
                  <div className="relative pl-14">
                    <span className="absolute left-18 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                    <input
                      type="text"
                      id="customAmount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Betrag eingeben"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow-md font-futura"
                    />
                  </div>
                </div>
                
                <div className="mb-8 relative z-10 pl-14">
                  <label className="flex items-center cursor-pointer font-futura">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isMonthly}
                        onChange={() => setIsMonthly(!isMonthly)}
                      />
                      <div className={`w-10 h-6 ${isMonthly ? 'bg-gradient-to-r from-accent-pink to-accent-blue' : 'bg-gray-300'} rounded-full shadow-inner transition-colors duration-300`}></div>
                      <div className={`absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform duration-300 ${isMonthly ? 'transform translate-x-4' : ''}`}></div>
                    </div>
                    <span className="ml-3 text-gray-700 flex items-center">
                      <Calendar size={16} className="mr-2 text-accent-pink" />
                      Als monatliche Spende einrichten
                    </span>
                  </label>
                </div>
                
                <div className="relative z-10">
                  <button className="w-full bg-gradient-to-r from-secondary to-accent-blue hover:from-secondary/90 hover:to-accent-blue/90 text-white py-4 rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.01] duration-300 font-futura flex items-center justify-center">
                    <Heart size={18} className="mr-2 animate-pulse" />
                    {isMonthly
                      ? `${donationAmount || 0} € monatlich spenden`
                      : `${donationAmount || 0} € jetzt spenden`}
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center font-futura">
                    Alle Spenden sind steuerlich absetzbar. Du erhältst eine Spendenquittung für deine Unterlagen.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-accent-pink/20"></div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Dein Impact</h2>
                <p className="text-gray-700 mb-8 font-futura">
                  Jeder Euro, den du spendest, hat einen direkten Einfluss auf das Leben der Hunde in Not. So machst du einen Unterschied:
                </p>
                
                <div className="space-y-5 mb-8">
                  {impactItems.map((item, index) => (
                    <div key={index} className="flex items-start p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="h-10 w-10 rounded-full bg-white border-2 border-accent-green flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                        <Check size={20} strokeWidth={2.5} className="text-accent-green" />
                      </div>
                      <div className="font-futura">
                        <span className="font-semibold text-primary">{item.amount}:</span> {item.impact}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-accent-blue/10 to-accent-pink/10 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-4 font-futura flex items-center">
                    <Heart size={18} className="mr-2 text-accent-pink" />
                    Wusstest du schon?
                  </h3>
                  <p className="text-gray-700 font-futura mb-4">
                    Mit nur 30€ kannst du bereits für die Kastration eines Hundes sorgen und damit theoretisch über 30.000 ungewollte Straßenhunde in 7 Jahren verhindern!
                  </p>
                  <p className="text-gray-700 font-futura">
                    Deine regelmäßige Unterstützung hilft uns, langfristige Projekte zu planen und konstant vor Ort wirken zu können.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100 relative overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full bg-gradient-to-br from-accent-blue/10 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-gradient-to-tl from-accent-pink/10 to-transparent pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Spende über Fundraising Box</h2>
              <p className="text-gray-700 mb-8 font-futura max-w-3xl">
                Nutze unsere Fundraising Box, um bequem online zu spenden. Du kannst einmalige oder regelmäßige Spenden einrichten
                und erhältst automatisch eine Spendenquittung.
              </p>
              
              <div className="fundraising-box-container">
                {/* Fundraising Box iFrame */}
                <div 
                  className="w-full border rounded-xl p-4 bg-gradient-to-br from-white to-gray-50 min-h-[600px] flex items-center justify-center shadow-md"
                >
                  <iframe 
                    src="https://secure.fundraisingbox.com/app/payment?hash=6kxst6shon1a6skt"
                    title="Fundraising Box Spenden Formular"
                    className="w-full h-[600px] border-0"
                    allow="payment"
                  />
                </div>
                
                <div className="mt-8 flex items-center justify-center">
                  <div className="text-accent-pink mr-3">
                    <Heart size={18} className="animate-pulse" />
                  </div>
                  <p className="text-sm text-gray-600 font-futura">
                    Fundraising Box bietet eine sichere Zahlungsabwicklung. Für Fragen zur Spende oder technischen Problemen 
                    kontaktiere bitte unseren Support unter <a href="mailto:info@famfordogs.com" className="text-primary underline hover:text-accent-blue transition-colors">info@famfordogs.com</a>.
                  </p>
                  <div className="text-accent-blue ml-3">
                    <Heart size={18} className="animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
