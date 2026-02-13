const http = require("http");

const PORT = process.env.PORT || 3001;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ service: "pagamentos", status: "ok" }));
  })
  .listen(PORT, "0.0.0.0", () => {
    console.log("Serviço pagamentos rodando na porta " + PORT);
  });
