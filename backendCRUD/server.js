import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import ServerItem from './models/serverItem';

const app = express();
const router = express.Router();

//port numbers
const portNo = 60221;
const mongoPort = 27017;

//run CORS to prevent error in browser
app.options('*', cors())
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:'+mongoPort+'/servers');
const connection = mongoose.connection;

//connect to database
connection.once('open', () => {
    console.log('MongoDB database connected!');
});
//start listening for web app
app.use('/', router);
app.listen(portNo, () => console.log(`Express running on port `+portNo));

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

//delete one
router.route('/servers/delete/:id').get((req, res) => {
    ServerItem.findByIdAndRemove({_id: req.params.id}, (err, server) => {
        if (err)
            res.json(err);
        else
            res.json('Server deleted');
    })
})
