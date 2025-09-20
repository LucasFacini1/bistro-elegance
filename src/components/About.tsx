import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Anos de Experiência' },
    { icon: Users, value: '10k+', label: 'Clientes Satisfeitos' },
    { icon: Clock, value: '24/7', label: 'Atendimento Premium' },
    { icon: Heart, value: '100%', label: 'Ingredientes Frescos' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                  Sobre Nós
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2">
                  Tradição e
                  <span className="block gradient-text">Inovação</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Desde 2008, o Bistro Elegance tem sido um marco na culinária sofisticada de São Paulo. 
                Nossa paixão pela gastronomia se reflete em cada prato, combinando técnicas tradicionais 
                com ingredientes frescos e inovação culinária.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Nossa equipe de chefs experientes trabalha incansavelmente para criar experiências 
                memoráveis, desde pratos clássicos até criações contemporâneas que surpreendem 
                e encantam nossos clientes.
              </p>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ingredientes Premium</h4>
                    <p className="text-gray-600 text-sm">
                      Selecionamos apenas os melhores ingredientes de fornecedores locais e internacionais
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ambiente Sofisticado</h4>
                    <p className="text-gray-600 text-sm">
                      Design elegante e atmosfera acolhedora para ocasiões especiais e jantares românticos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Atendimento Personalizado</h4>
                    <p className="text-gray-600 text-sm">
                      Nossa equipe está sempre pronta para tornar sua experiência única e memorável
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=600&fit=crop"
                    alt="Chef preparando prato"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop"
                    alt="Ambiente do restaurante"
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>

              <div className="space-y-4 pt-4 sm:pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop"
                    alt="Prato elegante"
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop"
                    alt="Ingredientes frescos"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl p-4 sm:p-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">4.8</div>
                <div className="text-sm text-gray-600">Avaliação Média</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
