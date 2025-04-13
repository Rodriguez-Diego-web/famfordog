import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, AlertTriangle, Upload, Send, Heart, PawPrint } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EmergencyReport = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    description: '',
  });
  
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name ist erforderlich';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Ungültiges E-Mail-Format';
    }
    
    if (formData.phone.trim() && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      errors.phone = 'Ungültiges Telefonnummer-Format';
    }
    
    if (!formData.location.trim()) {
      errors.location = 'Standort ist erforderlich';
    }
    
    if (!formData.description.trim()) {
      errors.description = 'Beschreibung ist erforderlich';
    } else if (formData.description.trim().length < 20) {
      errors.description = 'Bitte geben Sie eine ausführlichere Beschreibung (mindestens 20 Zeichen)';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      processImageFile(file);
    }
  };

  const processImageFile = (file: File) => {
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('Die Datei ist zu groß. Maximale Dateigröße beträgt 10MB.');
      return;
    }

    // Check file type
    if (!file.type.match('image.*')) {
      alert('Nur Bildformate werden unterstützt (JPG, PNG, GIF).');
      return;
    }

    setSelectedImage(file);
    
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setErrorMessage('Bitte füllen Sie alle erforderlichen Felder korrekt aus.');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage(null);
    
    // Prepare form data for email
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      location: formData.location,
      description: formData.description,
      image_included: selectedImage ? 'Ja' : 'Nein'
    };

    try {
      // Send email using EmailJS
      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your EmailJS credentials
      await emailjs.send(
        'service_famfordogs', // EmailJS service ID
        'template_emergency', // EmailJS template ID
        templateParams,
        'jqpuZ0AXPmQVvLGIp' // EmailJS public key
      );

      // If the message contains an image, handle it separately
      // This can be done in various ways - one option is to convert to base64 and attach
      // Another is to upload to a service like Cloudinary or Firebase Storage
      // For simplicity, we'll just note that an image was included in the email
      
      // Once email is sent successfully
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        description: '',
      });
      setSelectedImage(null);
      setPreviewUrl(null);
      
      // Scroll to top to show success message
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setErrorMessage('Es gab einen Fehler beim Senden Ihres Berichts. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-accent-pink/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-accent-yellow/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
          {isSubmitted ? (
            <div className="bg-gradient-to-br from-accent-green/20 to-accent-blue/10 border border-accent-green rounded-lg p-8 max-w-3xl mx-auto mb-12 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-accent-green mb-4 font-glorious">Notfall gemeldet!</h2>
                <p className="font-futura text-gray-700 text-center max-w-md mb-4">
                  Vielen Dank für Ihre Meldung. Unser Team wurde informiert und wird sich schnellstmöglich um den Notfall kümmern.
                </p>
                <p className="font-futura text-gray-600 text-sm text-center mb-6">
                  Wenn die Situation sich ändert oder Sie weitere Informationen haben, können Sie uns jederzeit über diese Seite erneut kontaktieren.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="mt-2 px-6 py-3 bg-gradient-to-r from-primary to-accent-green text-white rounded-full hover:shadow-lg transition-all duration-300 font-futura flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Neuen Notfall melden
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12 relative">
                <div className="flex justify-center">
                  <div className="inline-block p-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <AlertTriangle size={42} className="text-white" />
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Tiernotfall melden</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-pink via-accent-yellow to-accent-blue mx-auto mb-6"></div>
                <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 font-futura max-w-3xl mx-auto">
                  Haben Sie ein Tier in Not gefunden? Bitte füllen Sie das Formular aus, um uns schnellstmöglich zu informieren.
                </p>
                
                {/* Decorative paw prints */}
                <div className="absolute -left-4 top-1/4 transform -rotate-12 opacity-20">
                  <PawPrint size={32} className="text-accent-pink" />
                </div>
                <div className="absolute right-4 bottom-0 transform rotate-12 opacity-20">
                  <PawPrint size={24} className="text-accent-blue" />
                </div>
              </div>
              
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-8 max-w-3xl mx-auto shadow-md" role="alert">
                  <strong className="font-bold">Fehler: </strong>
                  <span className="block sm:inline">{errorMessage}</span>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12 relative border border-gray-100">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-24 h-24 rounded-tl-2xl bg-gradient-to-br from-accent-blue/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-br-2xl bg-gradient-to-tl from-accent-pink/20 to-transparent pointer-events-none"></div>
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  <div className="col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-futura">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      aria-invalid={!!validationErrors.name}
                      aria-describedby={validationErrors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200`}
                    />
                    {validationErrors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                    )}
                  </div>
                  
                  <div className="col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-futura">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      aria-invalid={!!validationErrors.phone}
                      aria-describedby={validationErrors.phone ? "phone-error" : undefined}
                      placeholder="+49 123 4567890"
                      className={`w-full px-4 py-3 border ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200`}
                    />
                    {validationErrors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                    )}
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-futura">
                      Ihre E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      aria-invalid={!!validationErrors.email}
                      aria-describedby={validationErrors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200`}
                    />
                    {validationErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                    )}
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 font-futura">
                      Standort des Notfalls *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        aria-invalid={!!validationErrors.location}
                        aria-describedby={validationErrors.location ? "location-error" : undefined}
                        placeholder="Stadt, Straße, oder Beschreibung der Umgebung"
                        className={`w-full pl-11 pr-4 py-3 border ${validationErrors.location ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200`}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-accent-pink" />
                      </div>
                    </div>
                    {validationErrors.location && (
                      <p id="location-error" className="mt-1 text-sm text-red-600">{validationErrors.location}</p>
                    )}
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1 font-futura">
                      Beschreibung des Notfalls *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      aria-invalid={!!validationErrors.description}
                      aria-describedby={validationErrors.description ? "description-error" : undefined}
                      rows={5}
                      placeholder="Bitte beschreiben Sie die Situation, den Zustand des Tieres und ggf. besondere Umstände"
                      className={`w-full px-4 py-3 border ${validationErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200`}
                    ></textarea>
                    {validationErrors.description && (
                      <p id="description-error" className="mt-1 text-sm text-red-600">{validationErrors.description}</p>
                    )}
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-futura">
                      Foto des Tieres (optional)
                    </label>
                    <div 
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors relative ${
                        isDragging 
                          ? 'border-accent-blue bg-accent-blue/10' 
                          : 'border-gray-300 hover:border-accent-blue hover:bg-accent-blue/5'
                      }`}
                      onDragEnter={handleDragEnter}
                      onDragLeave={handleDragLeave}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        className="hidden"
                        accept="image/*"
                      />
                      
                      {previewUrl ? (
                        <div className="relative w-full max-h-[200px] flex justify-center">
                          <img 
                            src={previewUrl} 
                            alt="Preview" 
                            className="max-h-[200px] max-w-full rounded-lg object-contain shadow-md"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(null);
                              setPreviewUrl(null);
                            }}
                            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                            aria-label="Remove image"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="w-14 h-14 bg-gradient-to-br from-accent-yellow to-accent-pink rounded-full flex items-center justify-center mb-3">
                            <Upload className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-gray-600 text-center mb-1 font-futura">
                            Ziehen Sie ein Bild hierher oder klicken Sie, um ein Bild auszuwählen
                          </p>
                          <p className="text-gray-400 text-xs text-center font-futura">
                            JPG, PNG, GIF bis 10MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent-blue text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Bitte warten...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Notfall melden
                      </>
                    )}
                  </button>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="flex justify-center items-center space-x-2 text-accent-pink">
                    <Heart size={16} className="animate-pulse" />
                    <p className="text-sm text-gray-500 font-futura">
                      Wir kümmern uns schnellstmöglich um Ihre Meldung
                    </p>
                    <Heart size={16} className="animate-pulse" />
                  </div>
                </div>
              </form>
              
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent-blue/10 to-accent-green/10 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-3 text-primary font-futura flex items-center">
                  <AlertTriangle size={18} className="mr-2 text-accent-yellow" /> 
                  Wichtige Hinweise
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 font-futura">
                  <li>Bei lebensgefährlichen Notfällen kontaktieren Sie bitte zusätzlich die örtliche Tierklinik.</li>
                  <li>Bitte versuchen Sie, das Tier bei Bedarf zu sichern, aber bringen Sie sich niemals selbst in Gefahr.</li>
                  <li>Falls möglich, bitte ein Foto hinzufügen – das hilft uns bei der schnellen Einschätzung.</li>
                  <li>Unser Team meldet sich schnellstmöglich zurück und koordiniert die nächsten Schritte.</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyReport;
