# 📌 API de Login

Esta API fornece um endpoint para autenticação de usuários. Ela verifica as credenciais enviadas e retorna uma resposta indicando se o login foi bem-sucedido ou não.

## 🚀 Tecnologias utilizadas
- Node.js
- Express.js
- Cors

## 📦 Instalação e Execução

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/ton1one/login_api.git
   cd api-login
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor:**
   ```sh
   node login.js
   ```

4. **A API rodará em:**
   ```
   http://localhost:3001
   ```

## 📌 Endpoints

### **1️⃣ Login**
**Rota:** `POST /login`

**Requisição:**
```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```

**Respostas:**
- **200 OK** - Login autorizado
  ```json
  {
    "success": true,
    "message": "Login autorizado"
  }
  ```
- **401 Unauthorized** - Senha incorreta
  ```json
  {
    "success": false,
    "message": "Senha incorreta"
  }
  ```
- **404 Not Found** - Usuário não encontrado
  ```json
  {
    "success": false,
    "message": "Usuário não encontrado"
  }
  ```
