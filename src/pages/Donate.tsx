
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
      amount: "$25",
      impact: "Provides food for one dog for a month"
    },
    {
      amount: "$50",
      impact: "Covers basic veterinary care for one dog"
    },
    {
      amount: "$100",
      impact: "Funds spay/neuter surgery for one dog"
    },
    {
      amount: "$250",
      impact: "Supports emergency medical care for a dog in critical condition"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold text-primary mb-8">Support Our Cause</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Your generous donation helps us continue our mission of rescuing, rehabilitating, and 
            rehoming dogs in need. Every contribution makes a difference in a dog's life.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Make a Donation</h2>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">Choose an amount:</p>
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
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="customAmount" className="text-gray-600 block mb-2">
                  Or enter a custom amount:
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="text"
                    id="customAmount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount"
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
                  <span className="ml-3 text-gray-700">Make this a monthly donation</span>
                </label>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-medium text-lg transition-colors">
                {isMonthly
                  ? `Donate $${donationAmount || 0} Monthly`
                  : `Donate $${donationAmount || 0} Now`}
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                All donations are tax-deductible. You will receive a receipt for your records.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Your Impact</h2>
              <p className="text-gray-700 mb-6">
                Every dollar you donate goes directly to helping dogs in need. Here's how your contribution makes a difference:
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
              
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Other Ways to Help</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    Volunteer your time
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    Foster a dog
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    Donate supplies
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    Sponsor a dog
                  </li>
                </ul>
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
