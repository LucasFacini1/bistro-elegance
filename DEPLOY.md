# 🚀 Guia de Deploy - Bistro Elegance

Este guia contém instruções para fazer deploy do projeto Bistro Elegance em diferentes plataformas.

## 📋 Pré-requisitos

- Node.js 16+ instalado
- Conta na plataforma de deploy escolhida
- Projeto configurado e testado localmente

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

**Vantagens:**
- Deploy automático via Git
- CDN global
- SSL automático
- Domínio personalizado gratuito

**Passos:**

1. **Instalar Vercel CLI:**
```bash
npm install -g vercel
```

2. **Fazer login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Configurar domínio (opcional):**
```bash
vercel domains add seu-dominio.com
```

### 2. Netlify

**Vantagens:**
- Deploy via drag & drop
- Formulários integrados
- Funções serverless

**Passos:**

1. **Build do projeto:**
```bash
npm run build
```

2. **Upload da pasta `build/` no Netlify**

3. **Configurar redirecionamentos:**
Criar arquivo `public/_redirects`:
```
/*    /index.html   200
```

### 3. GitHub Pages

**Vantagens:**
- Gratuito para repositórios públicos
- Integração com GitHub

**Passos:**

1. **Instalar gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Adicionar script no package.json:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy:**
```bash
npm run deploy
```

### 4. Firebase Hosting

**Vantagens:**
- Integração com outros serviços Google
- CDN global
- SSL automático

**Passos:**

1. **Instalar Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Login:**
```bash
firebase login
```

3. **Inicializar projeto:**
```bash
firebase init hosting
```

4. **Deploy:**
```bash
firebase deploy
```

## ⚙️ Configurações de Build

### Variáveis de Ambiente

Criar arquivo `.env.production`:
```env
REACT_APP_API_URL=https://api.bistroelegance.com
REACT_APP_GOOGLE_MAPS_API_KEY=sua-chave-aqui
```

### Otimizações

1. **Compressão de imagens:**
```bash
npm install --save-dev imagemin imagemin-webp
```

2. **Bundle analyzer:**
```bash
npm install --save-dev webpack-bundle-analyzer
```

## 🔧 Configurações Pós-Deploy

### 1. Domínio Personalizado

- **Vercel:** Configurar em Project Settings > Domains
- **Netlify:** Site Settings > Domain Management
- **GitHub Pages:** Repository Settings > Pages

### 2. SSL/HTTPS

Todas as plataformas mencionadas oferecem SSL automático.

### 3. Analytics

Adicionar Google Analytics no `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 4. SEO

- Verificar meta tags no `public/index.html`
- Configurar sitemap.xml
- Adicionar robots.txt

## 📊 Monitoramento

### 1. Performance

- **Lighthouse:** Audit de performance
- **WebPageTest:** Análise detalhada
- **GTmetrix:** Monitoramento contínuo

### 2. Uptime

- **UptimeRobot:** Monitoramento gratuito
- **Pingdom:** Monitoramento avançado

## 🚨 Troubleshooting

### Problemas Comuns

1. **Build falha:**
```bash
# Limpar cache
npm run build -- --reset-cache
```

2. **Roteamento não funciona:**
- Verificar configuração de redirecionamento
- Adicionar `_redirects` ou `_rewrites`

3. **Imagens não carregam:**
- Verificar caminhos relativos
- Usar import para imagens locais

### Logs de Deploy

- **Vercel:** Dashboard > Functions > Logs
- **Netlify:** Site Overview > Deploys
- **GitHub Pages:** Actions tab

## 📈 Otimizações de Performance

### 1. Code Splitting

```javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

### 2. Image Optimization

```javascript
// Usar next/image ou similar
<img 
  src={imageUrl} 
  loading="lazy" 
  alt="Description"
/>
```

### 3. Service Worker

```javascript
// Registrar service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## 🔐 Segurança

### 1. Headers de Segurança

Criar `public/_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### 2. CSP (Content Security Policy)

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline';">
```

## 📞 Suporte

Para dúvidas sobre deploy:

- **Vercel:** [docs.vercel.com](https://docs.vercel.com)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/pages)

---

✅ **Deploy realizado com sucesso!** 

Seu projeto Bistro Elegance está agora disponível online! 🎉
