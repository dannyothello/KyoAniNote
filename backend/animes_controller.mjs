import express from 'express';
import { body, validationResult } from 'express-validator';
import 'dotenv/config';

const app = express();

app.use(express.json());


app.get('/animes/:_id', (req, res) => {

});

app.get('/animes', (req, res) => {

});

app.post('/animes', (req, res) => {
    
});

app.put('/animes/:_id', (req, res) => {

});


app.delete('/animes/:_id', (req, res) => {

});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}`);
});