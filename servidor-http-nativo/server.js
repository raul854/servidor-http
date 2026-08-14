import http from 'node:http'
const PORT = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`[${new Date().toISOString()}] Requisição recebida! ${req.method} ${req.url}`);

    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Recurso criado!');
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})