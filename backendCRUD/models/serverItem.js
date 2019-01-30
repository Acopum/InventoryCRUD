import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let serverItem = new Schema({
    name: {
        type: String
    }
});

export default mongoose.model('serverItem', serverItem);
