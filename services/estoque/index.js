const http = require("http");

const PORT = process.env.PORT || 3002;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ service: "estoque", status: "ok" }));
  })
  .listen(PORT, "0.0.0.0", () => {
    console.log("Serviço estoque rodando na porta " + PORT);
  });
