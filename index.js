const express = require('express');
const zod = require('zod');
const app = express();
const port = 3000;

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/register', (req, res) => {
    try {
        const data = schema.parse(req.body);
        console.log(data);
        res.send('Data is valid');
    } catch (error) {
        console.log(error);
        res.status(400).send({
            error: error.errors
        });
    }

    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }

);

