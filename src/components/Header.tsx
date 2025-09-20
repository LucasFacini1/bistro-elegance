import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Calendar, Phone, MapPin } from 'lucide-react';
import { useCartStore } from '../store/useStore';

interface HeaderProps {
  onReservationClick: () => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReservationClick, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const { getTotalItems } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Cardápio', href: '#menu' },
    { name: 'Reservas', href: '#reservations' },
    { name: 'Contato', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    setIsNavigating(true);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    
    // Reset navigation state after animation
    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        boxShadow: isScrolled 
          ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        transition: { duration: 0.5, ease: "easeOut" }
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-2 h-16' 
          : 'bg-white/80 backdrop-blur-sm border-b border-white/30 py-4 h-20 lg:h-24'
      } ${isNavigating ? 'ring-2 ring-primary-500/50 ring-opacity-50' : ''}`}
    >
      <div className="container-max">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4 lg:py-6'
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{ 
              scale: isScrolled ? 0.95 : 1,
              transition: { duration: 0.3 }
            }}
            className="flex items-center space-x-2"
          >
            <motion.div 
              className={`bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center transition-all duration-500 ${
                isScrolled ? 'w-8 h-8' : 'w-10 h-10 sm:w-12 sm:h-12'
              }`}
              animate={{
                rotate: isScrolled ? 360 : 0,
                transition: { duration: 0.5 }
              }}
            >
              <span className={`text-white font-bold transition-all duration-500 ${
                isScrolled ? 'text-lg' : 'text-xl sm:text-2xl'
              }`}>B</span>
            </motion.div>
            <div>
              <motion.h1 
                className={`font-serif font-bold gradient-text transition-all duration-500 ${
                  isScrolled ? 'text-lg' : 'text-lg sm:text-xl'
                }`}
                animate={{
                  y: isScrolled ? -2 : 0,
                  transition: { duration: 0.3 }
                }}
              >
                Bistro Elegance
              </motion.h1>
              <motion.p 
                className={`text-gray-600 hidden sm:block transition-all duration-500 ${
                  isScrolled ? 'text-xs opacity-0' : 'text-xs opacity-100'
                }`}
                animate={{
                  opacity: isScrolled ? 0 : 1,
                  y: isScrolled ? -5 : 0,
                  transition: { duration: 0.3 }
                }}
              >
                Experiência culinária única
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ 
                  y: -2,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  y: isScrolled ? -1 : 0,
                  transition: { 
                    duration: 0.3,
                    delay: index * 0.05
                  }
                }}
                className={`font-medium transition-all duration-300 relative ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact Info - Desktop */}
            <div className="hidden xl:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Centro, SP</span>
              </div>
            </div>

            {/* Cart Button */}
            <motion.button
              onClick={onCartClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-gray-800 hover:text-primary-600'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {getTotalItems()}
                </motion.span>
              )}
            </motion.button>

            {/* Reservation Button */}
            <motion.button
              onClick={onReservationClick}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: isScrolled ? -1 : 0,
                transition: { duration: 0.3 }
              }}
              className={`hidden sm:flex items-center space-x-2 btn-primary transition-all duration-300 ${
                isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3'
              }`}
            >
              <motion.div
                animate={{
                  rotate: isScrolled ? 180 : 0,
                  transition: { duration: 0.5 }
                }}
              >
                <Calendar className="w-4 h-4" />
              </motion.div>
              <span>Reservar</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className={`lg:hidden p-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-gray-800 hover:text-primary-600'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-max py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 10 }}
                    className="text-left text-gray-800 hover:text-primary-600 font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Reservation Button */}
                <motion.button
                  onClick={onReservationClick}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center space-x-2 btn-primary mt-4"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Fazer Reserva</span>
                </motion.button>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>(11) 3456-7890</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Rua das Flores, 123 - Centro, SP</span>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
