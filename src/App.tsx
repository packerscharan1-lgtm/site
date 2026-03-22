import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      {/* Floating Buttons - Right Corner */}
      <FloatingButtons />
      
      {/* Main Content */}
      {renderPage()}
      
      {/* Footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
