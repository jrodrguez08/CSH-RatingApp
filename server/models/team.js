import mongoose from '../utils/mongoose';
import mongoosePaginate from 'mongoose-paginate';

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  id: {type: String, required: true, unique: true},
  name: {type: String, default: ''},
  yearFounded: {type: Date, default: Date.now},
  stadium: {type: String, default: ''}
});

teamSchema.plugin(mongoosePaginate);

export default mongoose.model('User', teamSchema);