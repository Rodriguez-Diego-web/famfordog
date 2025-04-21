import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-XXXXXXXXXX'; 

export const initGA = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(TRACKING_ID);
    console.log('Google Analytics wurde initialisiert');
  } else {
    console.log('Google Analytics wird im Entwicklungsmodus nicht geladen');
  }
};

export const sendPageView = (page: string) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: 'pageview', page });
    console.log(`Pageview gesendet: ${page}`);
  }
};

export const sendEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
    console.log(`Event gesendet: ${category} - ${action} ${label ? `- ${label}` : ''}`);
  }
};

export const sendException = (description: string, fatal: boolean = false) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event({
      category: 'Error',
      action: 'Exception',
      label: description,
      value: fatal ? 1 : 0,
    });
    console.log(`Exception gesendet: ${description}`);
  }
};
