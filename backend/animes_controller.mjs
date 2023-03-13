import express from 'express';
import { body } from 'express-validator';
import 'dotenv/config';
import * as animes from './animes_model.mjs';

const app = express();

app.use(express.json());

app.post('/animes', (req, res) => {
    animes.createAnime(req.body.title, req.body.story, req.body.animation, req.body.progress, req.body.type)
        .then(anime => {
            res.status(201).json(anime);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Invalid request' });
        });
});

app.get('/animes/:_id', (req, res) => {
    const animeId = req.params._id;
    animes.findAnimeById(animeId)
        .then(anime => {
            if (anime !== null) {
                res.json(anime);
            } 
            else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            res.status(400).json({ Error: 'Invalid request' });
        });

});

app.get('/animes', (req, res) => {
    let filter = {};
    animes.findAnimes(filter, '', 0)
        .then(animes => {
            res.send(animes);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Invalid request' });
        });

});

app.put('/animes/:_id', (req, res) => {
    animes.replaceAnime(req.params._id, req.body.title, req.body.story, req.body.animation, req.body.progress, req.body.type)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, title: req.body.title, story: req.body.story, animation: req.body.animation, progress: req.body.progress, type: req.body.type })
            } 
            else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Invalid request' });
        });
});


app.delete('/animes/:_id', (req, res) => {
    animes.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } 
            else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Invalid request' });
        });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}`);
});