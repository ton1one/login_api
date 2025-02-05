const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [
  { email: "admin@example.com", password: "123456" },
  { email: "user@example.com", password: "password" },
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({ success: false, message: "Usuário não encontrado" });
  }

  if (user.password !== password) {
    return res.status(401).json({ success: false, message: "Senha incorreta" });
  }

  return res.json({ success: true, message: "Login autorizado" });
});

app.listen(3001, '0.0.0.0', () => {
  console.log("Servidor rodando em http://localhost:3001");
});
