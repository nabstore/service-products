import app from './app';

const port = process.env.NODE_DOCKER_PORT;
const server = app.listen(port, () => console.log(`API escutando na porta ${port}`));

export default server;