import http from 'node:http'
const PORT = 3002

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Página inicial');
        return;
    }

    if (req.url === '/contato') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Página de contato');
        return;
    }

    if (req.url === '/produtos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Página de produtos');
        return;
    }

    if (req.url === '/status') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    // Nenhuma rota bateu -> 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Rota não encontrada');
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})