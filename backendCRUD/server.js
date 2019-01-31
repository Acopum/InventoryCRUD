import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();

import ServerItem from './models/serverItem';

app.options('*', cors())
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/servers');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));

//read all
router.route('/servers').get((req, res) => {
    ServerItem.find((err, servers) => {
        if (err)
            console.log(err);
        else
            res.json(servers);
    });
});

//read one
router.route('/servers/:id').get((req, res) => {
    ServerItem.findById(req.params.id, (err, servers) => {
        if (err)
            console.log(err);
        else
            res.json(servers);
    })
});

//create one
router.route('/servers/create').post((req, res) => {
    let server = new ServerItem(req.body);
    server.save()
        .then(server => {
            res.status(200).json({'server': 'Server added'});
        })
        .catch(err => {
            res.status(400).send('Failed to add server');
        });
});

//update one
router.route('/servers/update/:id').post((req, res) => {
    ServerItem.findById(req.params.id, (err, server) => {
        if (!server)
            return next(new Error('Could not find item'));
        else {
            server.name = req.body.name;
            server.save().then(server => {
                res.json('Server updated');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});
