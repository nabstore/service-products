import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import router from './routes';
import swaggerFile from '../swagger_output.json';
import cors from "cors"

const app = express();

app.use(morgan('tiny'));
app.use(cors({
    origin: ['http://localhost:3021', 'http://localhost:3015'],
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    credentials: true
  }));
app.use(express.json());
app.use(router)
app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(swaggerFile))

export default app;