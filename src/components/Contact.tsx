import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { restaurantInfo } from '../utils/mockData';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: restaurantInfo.address,
      action: 'Ver no mapa'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: restaurantInfo.phone,
      action: 'Ligar agora'
    },
    {
      icon: Mail,
      title: 'Email',
      content: restaurantInfo.email,
      action: 'Enviar email'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Seg - Dom: 11:30 - 23:00',
      action: 'Ver horários'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: `https://instagram.com/${restaurantInfo.socialMedia.instagram?.replace('@', '')}`,
      color: 'hover:text-pink-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: `https://facebook.com/${restaurantInfo.socialMedia.facebook}`,
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wide">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
            Vamos
            <span className="block text-primary-400">Conversar</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estamos aqui para tornar sua experiência ainda mais especial. 
            Entre em contato conosco para reservas, eventos ou qualquer dúvida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                      <p className="text-gray-300 mb-2">{info.content}</p>
                      <button 
                        className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
                        onClick={() => {
                          if (info.title === 'Telefone') {
                            window.open(`tel:${info.content.replace(/\D/g, '')}`, '_self');
                          } else if (info.title === 'Email') {
                            window.open(`mailto:${info.content}`, '_self');
                          } else if (info.title === 'Endereço') {
                            window.open('https://maps.google.com/?q=' + encodeURIComponent(info.content), '_blank');
                          } else {
                            alert(`${info.action} - Em desenvolvimento`);
                          }
                        }}
                      >
                        {info.action}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="relative">
              <div className="w-full h-64 bg-gray-800 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-300 font-medium">Mapa Interativo</p>
                    <p className="text-gray-400 text-sm">Rua das Flores, 123 - Centro, SP</p>
                  </div>
                </div>
              </div>
              
              {/* Map Overlay Button */}
              <motion.button
                onClick={() => {
                  window.open('https://maps.google.com/?q=Rua das Flores, 123 - Centro, São Paulo - SP', '_blank');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Abrir no Google Maps
              </motion.button>
            </div>

            {/* Special Offers */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Ofertas Especiais</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-primary-100">Happy Hour</span>
                  <span className="text-white font-semibold">17:00 - 19:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-100">Desconto Estudante</span>
                  <span className="text-white font-semibold">15% OFF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-100">Menu Executivo</span>
                  <span className="text-white font-semibold">Seg - Sex</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Receba nossas novidades e ofertas especiais diretamente no seu email.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                />
                <motion.button
                  onClick={() => {
                    alert('Newsletter - Em desenvolvimento. Em breve você poderá se inscrever!');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Inscrever
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
