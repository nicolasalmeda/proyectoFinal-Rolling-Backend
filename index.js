import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import './src/database/database.js'

const app = express();

app.use(cors());  
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));




app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), () => {
    console.log('Server on port', app.get('puerto'));
});