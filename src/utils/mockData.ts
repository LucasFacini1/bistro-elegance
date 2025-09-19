import { MenuItem, Category, RestaurantInfo } from '../types';

export const restaurantInfo: RestaurantInfo = {
  name: "Bistro Elegance",
  description: "Uma experiência culinária sofisticada que combina tradição e inovação em cada prato.",
  address: "Rua das Flores, 123 - Centro, São Paulo - SP",
  phone: "(11) 3456-7890",
  email: "contato@bistroelegance.com",
  hours: {
    monday: { open: "11:30", close: "22:00" },
    tuesday: { open: "11:30", close: "22:00" },
    wednesday: { open: "11:30", close: "22:00" },
    thursday: { open: "11:30", close: "22:00" },
    friday: { open: "11:30", close: "23:00" },
    saturday: { open: "12:00", close: "23:00" },
    sunday: { open: "12:00", close: "21:00" }
  },
  socialMedia: {
    instagram: "@bistroelegance",
    facebook: "BistroEleganceSP"
  }
};

export const categories: Category[] = [
  {
    id: "appetizers",
    name: "Entradas",
    description: "Deliciosas entradas para começar sua experiência",
    icon: "🥗"
  },
  {
    id: "mains",
    name: "Pratos Principais",
    description: "Nossos pratos principais cuidadosamente preparados",
    icon: "🍽️"
  },
  {
    id: "desserts",
    name: "Sobremesas",
    description: "Finalize sua refeição com nossos doces especiais",
    icon: "🍰"
  },
  {
    id: "beverages",
    name: "Bebidas",
    description: "Seleção especial de vinhos e bebidas",
    icon: "🍷"
  }
];

export const menuItems: MenuItem[] = [
  // Entradas
  {
    id: "bruschetta-tomato",
    name: "Bruschetta de Tomate e Manjericão",
    description: "Pão italiano tostado com tomate fresco, manjericão e azeite extra virgem",
    price: 28.90,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=500&h=300&fit=crop",
    ingredients: ["Pão italiano", "Tomate", "Manjericão", "Azeite", "Alho"],
    isVegetarian: true,
    isGlutenFree: false,
    isSpicy: false,
    preparationTime: 10,
    rating: 4.8,
    reviews: 24
  },
  {
    id: "carpaccio-beef",
    name: "Carpaccio de Carne",
    description: "Finas fatias de carne crua com rúcula, parmesão e molho de mostarda",
    price: 45.90,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop",
    ingredients: ["Carne bovina", "Rúcula", "Parmesão", "Mostarda", "Azeite"],
    isVegetarian: false,
    isGlutenFree: true,
    isSpicy: false,
    preparationTime: 15,
    rating: 4.9,
    reviews: 18
  },
  {
    id: "caesar-salad",
    name: "Salada Caesar Clássica",
    description: "Alface romana, croutons, parmesão e molho caesar artesanal",
    price: 32.90,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=300&fit=crop",
    ingredients: ["Alface romana", "Croutons", "Parmesão", "Molho caesar", "Anchovas"],
    isVegetarian: false,
    isGlutenFree: false,
    isSpicy: false,
    preparationTime: 12,
    rating: 4.6,
    reviews: 31
  },

  // Pratos Principais
  {
    id: "risotto-mushroom",
    name: "Risotto de Cogumelos Porcini",
    description: "Arroz arbóreo cremoso com cogumelos porcini e parmesão",
    price: 68.90,
    category: "mains",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=300&fit=crop",
    ingredients: ["Arroz arbóreo", "Cogumelos porcini", "Parmesão", "Caldo de legumes", "Cebola"],
    isVegetarian: true,
    isGlutenFree: true,
    isSpicy: false,
    preparationTime: 25,
    rating: 4.9,
    reviews: 42
  },
  {
    id: "salmon-teriyaki",
    name: "Salmão Teriyaki",
    description: "Salmão grelhado com molho teriyaki, arroz jasmim e legumes salteados",
    price: 78.90,
    category: "mains",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop",
    ingredients: ["Salmão", "Molho teriyaki", "Arroz jasmim", "Brócolis", "Cenoura"],
    isVegetarian: false,
    isGlutenFree: false,
    isSpicy: false,
    preparationTime: 20,
    rating: 4.7,
    reviews: 38
  },
  {
    id: "beef-wellington",
    name: "Beef Wellington",
    description: "Filé mignon envolto em massa folhada com patê de cogumelos",
    price: 125.90,
    category: "mains",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=300&fit=crop",
    ingredients: ["Filé mignon", "Massa folhada", "Cogumelos", "Patê", "Presunto"],
    isVegetarian: false,
    isGlutenFree: false,
    isSpicy: false,
    preparationTime: 35,
    rating: 4.9,
    reviews: 28
  },
  {
    id: "pasta-carbonara",
    name: "Pasta Carbonara",
    description: "Espaguete com bacon, ovos, parmesão e pimenta preta",
    price: 52.90,
    category: "mains",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=300&fit=crop",
    ingredients: ["Espaguete", "Bacon", "Ovos", "Parmesão", "Pimenta preta"],
    isVegetarian: false,
    isGlutenFree: false,
    isSpicy: false,
    preparationTime: 18,
    rating: 4.8,
    reviews: 45
  },

  // Sobremesas
  {
    id: "tiramisu",
    name: "Tiramisu Clássico",
    description: "Sobremesa italiana com café, mascarpone e cacau em pó",
    price: 24.90,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=300&fit=crop",
    ingredients: ["Mascarpone", "Café", "Biscoito savoiardi", "Cacau", "Ovos"],
    isVegetarian: true,
    isGlutenFree: false,
    isSpicy: false,
    preparationTime: 5,
    rating: 4.9,
    reviews: 67
  },
  {
    id: "chocolate-souffle",
    name: "Soufflé de Chocolate",
    description: "Soufflé quente de chocolate com sorvete de baunilha",
    price: 32.90,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=300&fit=crop",
    ingredients: ["Chocolate", "Ovos", "Açúcar", "Manteiga", "Sorvete de baunilha"],
    isVegetarian: true,
    isGlutenFree: true,
    isSpicy: false,
    preparationTime: 15,
    rating: 4.8,
    reviews: 23
  },
  {
    id: "creme-brulee",
    name: "Crème Brûlée",
    description: "Creme de baunilha com açúcar caramelizado",
    price: 26.90,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=300&fit=crop",
    ingredients: ["Creme de leite", "Baunilha", "Ovos", "Açúcar", "Leite"],
    isVegetarian: true,
    isGlutenFree: true,
    isSpicy: false,
    preparationTime: 8,
    rating: 4.7,
    reviews: 34
  },

  // Bebidas
  {
    id: "wine-red",
    name: "Vinho Tinto Reserva",
    description: "Vinho tinto reserva da casa, harmonização perfeita",
    price: 45.90,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500&h=300&fit=crop",
    ingredients: ["Uvas tintas", "Fermentação natural"],
    isVegetarian: true,
    isGlutenFree: true,
    isSpicy: false,
    preparationTime: 2,
    rating: 4.6,
    reviews: 19
  },
  {
    id: "cocktail-mojito",
    name: "Mojito Premium",
    description: "Mojito com rum premium, hortelã fresca e limão",
    price: 28.90,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=300&fit=crop",
    ingredients: ["Rum premium", "Hortelã", "Limão", "Açúcar", "Água com gás"],
    isVegetarian: true,
    isGlutenFree: true,
    isSpicy: false,
    preparationTime: 5,
    rating: 4.8,
    reviews: 41
  },
  {
    id: "coffee-espresso",
    name: "Espresso Artesanal",
    description: "Café espresso preparado com grãos selecionados",
    price: 8.90,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop",
    ingredients: ["Grãos de café", "Água"],
    isVegetarian: true,
    isGlutenFree: true,
    isSpicy: false,
    preparationTime: 3,
    rating: 4.5,
    reviews: 52
  }
];
