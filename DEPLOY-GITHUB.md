# 🚀 Deploy no GitHub Pages - Bistro Elegance

## 📋 Passos para Deploy

### 1. **Criar Repositório no GitHub**
```bash
# No GitHub, criar um novo repositório chamado "bistro-elegance"
# IMPORTANTE: Deixar público para GitHub Pages funcionar
```

### 2. **Configurar o Repositório Local**
```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit: Bistro Elegance - Modern restaurant website"

# Conectar com o repositório remoto
git remote add origin https://github.com/SEUUSUARIO/bistro-elegance.git

# Enviar para o GitHub
git push -u origin main
```

### 3. **Atualizar o Homepage no package.json**
```json
{
  "homepage": "https://SEUUSUARIO.github.io/bistro-elegance"
}
```

### 4. **Fazer o Deploy**
```bash
# Deploy para GitHub Pages
npm run deploy
```

### 5. **Configurar GitHub Pages**
1. Ir para **Settings** do repositório
2. Scroll até **Pages**
3. Em **Source**, selecionar **Deploy from a branch**
4. Selecionar **gh-pages** branch
5. Clicar **Save**

## 🌐 **URL Final**
Seu site estará disponível em:
**https://SEUUSUARIO.github.io/bistro-elegance**

## 🔄 **Atualizações Futuras**
```bash
# Para atualizar o site:
git add .
git commit -m "Update: descrição da mudança"
git push origin main
npm run deploy
```

## 📱 **Testar o Deploy**
- ✅ Site carrega corretamente
- ✅ Todas as seções funcionam
- ✅ Navegação suave
- ✅ Carrinho funciona
- ✅ Reservas funcionam
- ✅ Design responsivo

## 🎯 **Para Portfolio**
- ✅ **URL profissional** para mostrar
- ✅ **Código público** no GitHub
- ✅ **Deploy automático** via Git
- ✅ **HTTPS** automático
- ✅ **Gratuito** e confiável

## 🚨 **Troubleshooting**

### Erro de Build:
```bash
# Limpar cache
npm run build -- --reset-cache
```

### Erro de Deploy:
```bash
# Verificar se o repositório é público
# Verificar se o homepage está correto
# Verificar se gh-pages está instalado
```

### Site não carrega:
- Verificar se GitHub Pages está ativado
- Verificar se a branch gh-pages existe
- Aguardar alguns minutos para propagação

---

## 🎉 **Resultado Final**
Um site profissional, moderno e funcional disponível publicamente para mostrar em seu portfolio!
