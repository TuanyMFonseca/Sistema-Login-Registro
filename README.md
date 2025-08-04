# 🚀 Sistema de Login e Registro com Node.js, Passport e MongoDB 

Este projeto é um boilerplate (modelo) para uma aplicação web que utiliza Node.js e Passport.js para gerenciar a autenticação de usuários. O sistema inclui funcionalidades de registro, login e logout, além de rotas protegidas que só podem ser acessadas por usuários autenticados.

## Visão Geral 

demonstra a criação de uma aplicação de autenticação completa, utilizando uma estratégia local do Passport.js para gerenciar usuários e senhas armazenados em um banco de dados MongoDB. O projeto é uma base sólida para quem deseja implementar um sistema de autenticação robusto em suas próprias aplicações.

## 🛠 Tecnologias Utilizadas:
- **Node.js** + **Express**: Para o ambiente de servidor e o framework web.
- **MongoDB Atlas** + **Mongoose**: MongoDB é o banco de dados utilizado, e Mongoose é o ODM (Object Data Modeling) para interagir com ele.
- **Passport.js**: Middleware de autenticação flexível. A estratégia local é utilizada para login com e-mail e senha.
- **EJS**: Um motor de templates para renderizar views do lado do servidor.
- **Bcrypt.js**: Uma biblioteca para hash de senhas, garantindo o armazenamento seguro das credenciais.
- **Express Session** + **Connect Flash**: Para gerenciar sessões de usuário e exibir mensagens temporárias (flash messages).
- **Bootswatch**: Um tema do Bootstrap para estilizar a interface de usuário.

## 📌 Funcionalidades:  
- **Registro de Usuário**: Formulário de registro com validação, verificação de e-mails já existentes e armazenamento seguro de senhas com hash.
- **Login de Usuário**: Autenticação via e-mail e senha com a estratégia local do Passport.js.
- **Rotas Protegidas**: Implementação de middleware para restringir o acesso a certas páginas apenas para usuários autenticados (ex: painel de controle).

## 📂 Estrutura do Projeto:
```
node-passport-auth/
├── app.js
├── config/
│ ├── keys.js
│ ├── passport.js
├── models/
│ └── user.js
├── routes/
│ ├── index.js
│ └── users.js
├── views/
│ ├── layout.ejs
│ ├── welcome.ejs
│ ├── login.ejs
│ ├── register.ejs
│ ├── dashboard.ejs
│ └── partials/
│ └── messages.ejs
├── package.json
└── public/ # Arquivos estáticos (CSS/JS)
```

## ⚙️ Instalação e Configuração:

1️⃣ **Configuração do Banco de Dados**  
- Crie um cluster gratuito no **MongoDB Atlas**  
- Crie um **usuário para o banco de dados** e obtenha a **string de conexão**

2️⃣ **Dependências**:
 - Instale as **dependências**: ``` npm install express mongoose passport passport-local bcrypt express-session dotenv ejs ```


3️⃣**Execução**:
- Crie um arquivo **.env** para armazenar a string de conexão do **MongoDB**.
- **Execute a aplicação**:``` npm start ``` ou ``` npm run dev ```  se estiver usando nodemon.
- Acesse a aplicação no seu **navegador**:http://localhost:5000

## 🔑 Rotas da Aplicação

| Método | Rota       | Descrição                                               |
|--------|-----------|----------------------------------------------------------|
| GET    | /register  | Exibe formulário de registro                            |
| POST   | /register  | Valida dados, cria usuário                              |
| GET    | /login     | Exibe formulário de login                               |
| POST   | /login     | Autentica com `passport.authenticate('local')`          |
| GET    | /dashboard | Rota protegida, acessível só se `req.isAuthenticated()` |
| GET    | /logout    | Faz logout via `req.logout()`                           |



🔒 **Segurança**:
- Senhas não são salvas em texto plano, apenas hash com bcrypt
- Sessões seguras com `express-session`
- Rotas privadas usam `req.isAuthenticated()` como middleware
- Variáveis sensíveis no `.env`


🚀 **Melhorias Futuras**:
- Recuperação de senha via e-mail
- Confirmação de e-mail ao registrar
- API REST com JWT para front-end moderno

📸 **Prints** :
| Pagina Principal | Registro/cadastro |
|---------|---------|
| <img width="250" height="251" alt="image" src="https://github.com/user-attachments/assets/61652d89-ec14-4fe5-932e-d085d7441d66" /> |  <img width="200" height="398" alt="image" src="https://github.com/user-attachments/assets/00696284-742d-4380-9910-1a7b6238907f" /> |

| Senha Incorreta | Email Não Registrado|
|---------|---------|
| <img width="200" height="364" alt="image" src="https://github.com/user-attachments/assets/6b417991-b9df-425d-9006-50f3a7af7eff" /> | <img width="200" height="329" alt="image" src="https://github.com/user-attachments/assets/a5fbf285-d45e-42f4-bced-d2d0afc1a21a" /> |

| Msg Cadastrado C/Sucesso | Dashboard |
|---------|---------|
| <img width="200" height="322" alt="image" src="https://github.com/user-attachments/assets/98a1ac08-8dd6-4e24-9fd7-124166563527" /> | <img width="250" height="146" alt="image" src="https://github.com/user-attachments/assets/cfac6aff-ba73-4f87-a152-2bf2d21abe6f" /> |

| Email Já Registrado | Aviso Senha |
|---------|---------|
| <img width="200" height="410" alt="image" src="https://github.com/user-attachments/assets/b91ac281-0657-42f0-8aff-e27f0482967a" /> | <img width="250" height="192" alt="image" src="https://github.com/user-attachments/assets/67c4e6e5-c174-483d-88ad-8410f82a5458" />|



  


