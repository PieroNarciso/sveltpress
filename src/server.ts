import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import router from './lib/router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const { PORT = 3001 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// Serve app production bundle
app.use(express.static('dist/app'));


// products
app.get('/products/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/products/index.html'));
})

// products
app.get('/clients/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/clients/index.html'));
})

// root
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
