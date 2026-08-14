import http from 'node:http'
const PORT = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`[${new Date().toISOString()}] Requisição recebida! ${req.method} ${req.url}`);

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: "ok" }));
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})