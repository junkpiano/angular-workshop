import express from 'express';
import cors from 'cors';
import multer from 'multer';
import pool from './dbpool';
import {fileNameFilter, imageFilter} from "./helpers";

const app = express();
app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: 'public/files/uploads/',
    filename: fileNameFilter
});

const upload = multer({
    fileFilter: imageFilter,
    storage: storage
});

app.get('/hello', (req, res) => {
    res.status(200).send({ message: 'hello, world' });
})

app.get('/images', async (req, res) => {
    try {
        const client = await pool.connect();
        const sql = 'SELECT * FROM images';
        const { rows } = await client.query(sql);
        const images = rows;

        client.release();

        res.send(images);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/images', upload.single('image'), async (req, res) => {
    try {
         const client = await pool.connect();
         const imageUrl = "/" + req.file.path.split('/').slice(1).join('/');
         const sql = `INSERT INTO images(url) VALUES ('${imageUrl}')`;
         await client.query(sql);

         client.release();

         res.send({ message: "image sent!" });
    } catch (error) {
        res.status(400).send(error)
    }
});

app.listen(port);
console.log('listening on the port ' + port);

