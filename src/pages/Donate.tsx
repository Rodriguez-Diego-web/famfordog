import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const Donate = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const [donationAmount, setDonationAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

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
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold text-primary mb-8">Unterstütze unsere Mission</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Deine großzügige Spende hilft uns, unsere Aufgabe fortzusetzen, Straßenhunde zu kastrieren,
            Hunde in Not zu retten und zu rehabilitieren. Jeder Beitrag macht einen Unterschied im Leben
            eines Hundes.
            Dank Spendenbescheinigungen, die wir als eingetragener gemeinnütziger Verein ausstellen
            dürfen, kannst du deine Unterstützung steuerlich absetzen.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Jetzt spenden</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Spendenkonto:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Dogs of Lombok e.V.</strong></li>
                  <li><strong>IBAN:</strong> DE 91 8306 5408 0005 3189 55</li>
                  <li><strong>Bank:</strong> Skatbank</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2 italic">
                  (wird noch geändert, aber aktuell läuft es noch auf Dogs of Lombok e.V.)
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">PayPal:</h3>
                <a 
                  href="https://www.paypal.com/donate/?hosted_button_id=3ELJCXP5LQDTG&fbclid=PAZXh0bgNhZW0CMTEAAabu5I5Oj-9SzlYIgabUoY7yhOwlVQHDCdVDlRb3hsA8njGp3bXgy7G3R0o_aem_ATZFcYsKg9E98LzAeP7Z9BoHbzMKR93S1M3i_VQ0mLQ4G-4BQmq50p1tgTY60JhDdB0Pzr_6oB9kyV9Nrk_23sIg"
                  className="bg-[#0070ba] hover:bg-[#005ea6] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center w-full md:w-auto transition-colors mb-2"
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
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">Wähle einen Betrag:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 rounded-lg transition-all ${
                        donationAmount === amount
                          ? "bg-secondary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {amount} €
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="customAmount" className="text-gray-600 block mb-2">
                  Oder gib einen eigenen Betrag ein:
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                  <input
                    type="text"
                    id="customAmount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Betrag eingeben"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isMonthly}
                      onChange={() => setIsMonthly(!isMonthly)}
                    />
                    <div className={`w-10 h-6 ${isMonthly ? 'bg-secondary' : 'bg-gray-300'} rounded-full shadow-inner transition-colors duration-300`}></div>
                    <div className={`absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform duration-300 ${isMonthly ? 'transform translate-x-4' : ''}`}></div>
                  </div>
                  <span className="ml-3 text-gray-700">Als monatliche Spende einrichten</span>
                </label>
              </div>
              
              <button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-4 rounded-lg font-medium text-lg transition-colors">
                {isMonthly
                  ? `${donationAmount || 0} € monatlich spenden`
                  : `${donationAmount || 0} € jetzt spenden`}
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Alle Spenden sind steuerlich absetzbar. Du erhältst eine Spendenquittung für deine Unterlagen.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Dein Impact</h2>
              <p className="text-gray-700 mb-6">
                Jeder Euro, den du spendest, hat einen direkten Einfluss auf das Leben der Hunde in Not. So machst du einen Unterschied:
              </p>
              
              <div className="space-y-4 mb-8">
                {impactItems.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-accent-green flex items-center justify-center mr-3 mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-primary">{item.amount}:</span> {item.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
