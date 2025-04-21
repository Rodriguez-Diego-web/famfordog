import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout-Komponente, die auf allen Seiten verwendet wird
 * Enthält Navbar, Footer und automatisches Scrollen zum Seitenanfang
 */
const Layout = ({ children }: LayoutProps) => {
  // Automatisches Scrollen zum Seitenanfang bei Routenwechsel
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
