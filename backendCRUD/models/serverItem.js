import mongoose from 'mongoose';

//schema maps to every data field in DB entries except objectID
const Schema = mongoose.Schema;

let ServerItem = new Schema({
    name: {
        type: String
    }
});

export default mongoose.model('ServerItem', ServerItem, 'servers');
