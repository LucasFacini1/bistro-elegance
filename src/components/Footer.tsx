import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Heart } from 'lucide-react';
import { restaurantInfo } from '../utils/mockData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Restaurante': [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Nosso Cardápio', href: '#menu' },
      { name: 'Reservas', href: '#reservations' },
      { name: 'Contato', href: '#contact' }
    ],
    'Serviços': [
      { name: 'Jantares Românticos', href: '#' },
      { name: 'Eventos Corporativos', href: '#' },
      { name: 'Catering', href: '#' },
      { name: 'Delivery', href: '#' }
    ],
    'Suporte': [
      { name: 'FAQ', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Cancelamento', href: '#' }
    ]
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: `https://instagram.com/${restaurantInfo.socialMedia.instagram?.replace('@', '')}`,
      color: 'hover:text-pink-400'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: `https://facebook.com/${restaurantInfo.socialMedia.facebook}`,
      color: 'hover:text-blue-400'
    }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">Bistro Elegance</h3>
                  <p className="text-sm text-gray-400">Experiência culinária única</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Desde 2008, oferecemos uma experiência gastronômica sofisticada 
                que combina tradição e inovação em cada prato.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm">{restaurantInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm">{restaurantInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm">{restaurantInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm">Seg - Dom: 11:30 - 23:00</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {link.href.startsWith('#') ? (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`${link.name} - Em desenvolvimento`);
                          }}
                        >
                          {link.name}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-2">Receba nossas novidades</h4>
              <p className="text-gray-400 text-sm">
                Ofertas especiais, novos pratos e eventos exclusivos
              </p>
            </div>
            
            <div className="flex w-full md:w-auto space-x-2">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 w-full md:w-64"
              />
              <motion.button
                onClick={() => {
                  alert('Newsletter - Em desenvolvimento. Em breve você poderá se inscrever!');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Inscrever
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Bistro Elegance. Todos os direitos reservados.</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Siga-nos:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Política de Privacidade - Em desenvolvimento');
                }}
              >
                Privacidade
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Termos de Uso - Em desenvolvimento');
                }}
              >
                Termos
              </a>
              <a 
                href="#cookies" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Política de Cookies - Em desenvolvimento');
                }}
              >
                Cookies
              </a>
              <span className="text-gray-500 text-xs">
                Admin: Ctrl+Shift+A
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
