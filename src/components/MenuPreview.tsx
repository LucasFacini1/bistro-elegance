import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Plus, Minus, ShoppingCart } from 'lucide-react';
import { menuItems, categories } from '../utils/mockData';
import { useCartStore } from '../store/useStore';
import { MenuItem } from '../types';

const MenuPreview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('appetizers');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const { addItem } = useCartStore();

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const addToCart = (item: MenuItem) => {
    const quantity = quantities[item.id] || 1;
    addItem(item, quantity);
    setQuantities(prev => ({ ...prev, [item.id]: 0 }));
  };

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Nosso Cardápio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">
            Sabores
            <span className="block gradient-text">Excepcionais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção cuidadosamente elaborada de pratos que combinam 
            tradição culinária com ingredientes frescos e técnicas inovadoras.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-1">
                    {item.isVegetarian && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Veg
                      </span>
                    )}
                    {item.isGlutenFree && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        Sem Glúten
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        Picante
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 flex-1 pr-2">
                      {item.name}
                    </h3>
                    <div className="text-lg sm:text-2xl font-bold text-primary-600 flex-shrink-0">
                      R$ {item.price.toFixed(2)}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Ingredients */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {item.ingredients.slice(0, 3).map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{item.ingredients.length - 3} mais
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.preparationTime} min</span>
                    </div>
                    <span>{item.reviews} avaliações</span>
                  </div>

                  {/* Quantity and Add to Cart */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {quantities[item.id] || 0}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <motion.button
                      onClick={() => addToCart(item)}
                      disabled={!quantities[item.id] || quantities[item.id] === 0}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center ${
                        quantities[item.id] && quantities[item.id] > 0
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Adicionar</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 px-4"
        >
          <motion.button
            onClick={() => {
              alert('Cardápio completo - Em desenvolvimento. Por enquanto, explore as categorias acima!');
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Ver Cardápio Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
