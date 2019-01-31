import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let ServerItem = new Schema({
    name: {
        type: String
    }
});

export default mongoose.model('ServerItem', ServerItem, 'servers');
