import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
