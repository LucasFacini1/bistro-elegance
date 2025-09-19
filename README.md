# 🍽️ Bistro Elegance

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-green?style=for-the-badge)](https://LucasFacini1.github.io/bistro-elegance)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Um sistema de gerenciamento de restaurante moderno e elegante que desenvolvi para demonstrar minhas habilidades em desenvolvimento frontend moderno.

## 🌐 **Demo ao Vivo**
**[Ver Site em Funcionamento](https://LucasFacini1.github.io/bistro-elegance)**

## ✨ Características

### 🎨 Design Moderno
- Interface elegante e sofisticada
- Design responsivo para todos os dispositivos
- Animações fluidas com Framer Motion
- Paleta de cores profissional
- Tipografia refinada com Google Fonts

### 🚀 Funcionalidades Principais

#### 🏠 Landing Page
- Hero section impactante com call-to-actions
- Seção "Sobre" com estatísticas e galeria
- Preview do cardápio com categorias
- Sistema de contato completo

#### 📋 Sistema de Cardápio
- Cardápio interativo com categorias
- Filtros por tipo de comida (vegetariano, sem glúten, picante)
- Avaliações e tempo de preparo
- Sistema de adição ao carrinho

#### 🛒 Carrinho de Compras
- Persistência local com Zustand
- Controle de quantidade
- Instruções especiais
- Cálculo automático de totais

#### 📅 Sistema de Reservas
- Formulário de reserva completo
- Validação de dados
- Seleção de data e horário
- Confirmação visual

#### 📱 Responsividade
- Mobile-first design
- Navegação adaptativa
- Componentes otimizados para touch
- Performance otimizada

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animações
- **Zustand** - Gerenciamento de estado
- **React Hook Form** - Formulários
- **Lucide React** - Ícones
- **Date-fns** - Manipulação de datas

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd bistro-elegance
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Acesse no navegador:
```
http://localhost:3000
```

### Scripts Disponíveis

- `npm start` - Executa o projeto em modo de desenvolvimento
- `npm build` - Cria build de produção
- `npm test` - Executa os testes
- `npm eject` - Ejecta a configuração do Create React App

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção hero da landing page
│   ├── About.tsx       # Seção sobre o restaurante
│   ├── MenuPreview.tsx # Preview do cardápio
│   ├── Contact.tsx     # Seção de contato
│   ├── Footer.tsx      # Rodapé
│   ├── ReservationModal.tsx # Modal de reservas
│   └── Cart.tsx        # Carrinho de compras
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── store/              # Gerenciamento de estado (Zustand)
├── types/              # Definições TypeScript
├── utils/              # Utilitários e dados mock
└── assets/             # Recursos estáticos
```

## 🎯 Funcionalidades Implementadas

### ✅ Completas
- [x] Landing page responsiva
- [x] Sistema de navegação
- [x] Cardápio interativo
- [x] Carrinho de compras
- [x] Sistema de reservas
- [x] Animações e micro-interações
- [x] Design responsivo
- [x] Persistência de dados local

### 🔄 Melhorias Futuras
- [ ] Sistema de autenticação
- [ ] Integração com APIs reais
- [ ] Sistema de pagamento
- [ ] Notificações push
- [ ] PWA (Progressive Web App)

## 🎨 Paleta de Cores

- **Primary**: Laranja elegante (#ed7a1a)
- **Secondary**: Cinza sofisticado (#64748b)
- **Accent**: Verde natural (#22c55e)
- **Background**: Branco e cinza claro
- **Text**: Cinza escuro para contraste

## 📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload da pasta build/
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Sobre o Projeto

Este projeto foi desenvolvido como uma demonstração das minhas habilidades em desenvolvimento frontend moderno. Utilizei as mais recentes tecnologias e melhores práticas para criar uma experiência de usuário excepcional.

## 🎯 Objetivos

- Demonstrar proficiência em React e TypeScript
- Mostrar habilidades em design responsivo
- Implementar animações e micro-interações
- Criar um sistema completo de gerenciamento

## 📞 Contato

- **GitHub**: [LucasFacini1](https://github.com/LucasFacini1)
- **LinkedIn**: [Lucas Facini](https://www.linkedin.com/in/lucas-facini-739056328/)

---

⭐ Se gostou do projeto, considere dar uma estrela!
