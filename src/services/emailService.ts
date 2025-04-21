import emailjs from 'emailjs-com';

// EmailJS-Konfiguration
const SERVICE_ID = 'service_zx16y4n';
const USER_ID = '3V-jg3j8Dw-bZgPFG';

// Template IDs
const TEMPLATES = {
  CONTACT: 'template_kw0e688',
  VOLUNTEER: 'template_kw0e688', // Aktuell das gleiche Template, kann später geändert werden
  MEMBERSHIP: 'template_kw0e688', // Aktuell das gleiche Template, kann später geändert werden
  EMERGENCY: 'template_hv56sfn'  // Spezifisches Template für Notfallmeldungen
};

/**
 * Sendet eine E-Mail über EmailJS
 * @param templateId Die ID des zu verwendenden Templates
 * @param templateParams Die Parameter für das Template
 * @returns Ein Promise mit dem Ergebnis des E-Mail-Versands
 */
export const sendEmail = (templateId: string, templateParams: Record<string, unknown>) => {
  // Füge einen Zeitstempel zu allen E-Mails hinzu
  const paramsWithTimestamp = {
    ...templateParams,
    timestamp: new Date().toLocaleString('de-DE')
  };
  
  return emailjs.send(SERVICE_ID, templateId, paramsWithTimestamp, USER_ID);
};

/**
 * Formatiert den Interessensbereich für das Kontaktformular
 * @param interest Der Interessensbereich als String
 * @returns Der formatierte Interessensbereich
 */
const formatInterest = (interest: string): string => {
  switch (interest) {
    case 'contact': return 'Kontakt/Allgemeine Anfrage';
    case 'volunteer': return 'Volunteering';
    case 'membership': return 'Fördermitglied';
    case 'sponsorship': return 'Patenschaft';
    default: return interest;
  }
};

/**
 * Sendet eine Kontaktformular-E-Mail
 * @param params Die Parameter für das Kontaktformular
 */
export const sendContactEmail = (params: {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
}) => {
  const templateParams = {
    name: params.name,
    email: params.email,
    phone: params.phone || 'Nicht angegeben',
    interest: formatInterest(params.interest),
    message: params.message,
    formType: 'Kontaktformular'
  };

  return sendEmail(TEMPLATES.CONTACT, templateParams);
};

/**
 * Sendet eine Mitgliedschaftsformular-E-Mail
 * @param params Die Parameter für das Mitgliedschaftsformular
 */
export const sendMembershipEmail = (params: {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  email: string;
  phone: string;
  birthDate?: string;
  contributionAmount?: number;
  paymentInterval?: string;
  paymentMethod: string;
  iban?: string;
  bic?: string;
  accountOwner?: string;
}) => {
  const templateParams = {
    firstName: params.firstName,
    lastName: params.lastName,
    fullName: `${params.firstName} ${params.lastName}`,
    street: params.street,
    postalCode: params.postalCode,
    city: params.city,
    email: params.email,
    phone: params.phone || 'Nicht angegeben',
    birthDate: params.birthDate || 'Nicht angegeben',
    contributionAmount: params.contributionAmount || 'Nicht angegeben',
    paymentInterval: params.paymentInterval || 'Nicht angegeben',
    paymentMethod: params.paymentMethod,
    iban: params.iban || 'Nicht angegeben',
    bic: params.bic || 'Nicht angegeben',
    accountOwner: params.accountOwner || 'Nicht angegeben',
    formType: 'Fördermitgliedschaft'
  };

  return sendEmail(TEMPLATES.MEMBERSHIP, templateParams);
};

/**
 * Sendet eine Notfallmeldungs-E-Mail
 * @param params Die Parameter für die Notfallmeldung
 */
export const sendEmergencyEmail = (params: {
  name: string;
  email: string;
  phone: string;
  location: string;
  animalType: string;
  situation: string;
  message: string;
  hasPhotos: boolean;
}) => {
  const templateParams = {
    name: params.name,
    email: params.email,
    phone: params.phone || 'Nicht angegeben',
    location: params.location,
    animalType: params.animalType,
    situation: params.situation,
    message: params.message,
    hasPhotos: params.hasPhotos ? 'Ja' : 'Nein',
    formType: 'Notfallmeldung'
  };

  return sendEmail(TEMPLATES.EMERGENCY, templateParams);
};
