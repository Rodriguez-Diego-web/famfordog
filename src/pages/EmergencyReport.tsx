import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, AlertTriangle, Upload, Send } from 'lucide-react';
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
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          {isSubmitted ? (
            <div className="bg-accent-green/10 border border-accent-green rounded-lg p-6 max-w-3xl mx-auto mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-accent-green mb-4 font-futura">Notfall gemeldet!</h2>
                <p className="font-futura text-gray-700 text-center max-w-md mb-4">
                  Vielen Dank für Ihre Meldung. Unser Team wurde informiert und wird sich schnellstmöglich um den Notfall kümmern.
                </p>
                <p className="font-futura text-gray-600 text-sm text-center mb-6">
                  Wenn die Situation sich ändert oder Sie weitere Informationen haben, können Sie uns jederzeit über diese Seite erneut kontaktieren.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="mt-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-futura flex items-center"
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
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                  <AlertTriangle size={40} className="text-red-600" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Tiernotfall melden</h1>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-futura max-w-3xl mx-auto">
                  Haben Sie ein Tier in Not gefunden? Bitte füllen Sie das Formular aus, um uns schnellstmöglich zu informieren.
                </p>
              </div>
              
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 max-w-3xl mx-auto" role="alert">
                  <strong className="font-bold">Fehler: </strong>
                  <span className="block sm:inline">{errorMessage}</span>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className={`w-full px-4 py-2 border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-transparent`}
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
                      className={`w-full px-4 py-2 border ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-transparent`}
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
                      className={`w-full px-4 py-2 border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-transparent`}
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
                        className={`w-full pl-10 pr-4 py-2 border ${validationErrors.location ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-transparent`}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-gray-400" />
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
                      className={`w-full px-4 py-2 border ${validationErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-transparent`}
                    ></textarea>
                    {validationErrors.description && (
                      <p id="description-error" className="mt-1 text-sm text-red-600">{validationErrors.description}</p>
                    )}
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-futura">
                      Foto hochladen
                    </label>
                    <div 
                      className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors ${
                        isDragging 
                          ? 'border-primary bg-primary/10' 
                          : 'border-gray-300 hover:border-primary/60'
                      }`}
                      onDragEnter={handleDragEnter}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div className="space-y-1 text-center">
                        {previewUrl ? (
                          <div>
                            <img 
                              src={previewUrl} 
                              alt="Vorschau" 
                              className="mx-auto h-48 object-contain mb-4" 
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering parent div's onClick
                                setSelectedImage(null);
                                setPreviewUrl(null);
                              }}
                              className="text-sm text-red-600 hover:text-red-800"
                            >
                              Bild entfernen
                            </button>
                          </div>
                        ) : (
                          <>
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80"
                              >
                                <span>Datei auswählen</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  ref={fileInputRef}
                                  accept="image/*"
                                  onChange={handleImageChange}
                                />
                              </label>
                              <p className="pl-1">oder hierher ziehen</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF bis zu 10MB
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-futura flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Notfall melden
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyReport;
