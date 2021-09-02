import * as mongoose from 'mongoose';
import { WinnerInterface } from '../interfaces/winner.interface';

const WinnerSchema = new mongoose.Schema({
	reward_id : { type: mongoose.Schema.Types.ObjectId },
	reward_name : { type: String, trim: true, required: true},
	reward_quantity : { type: String, trim: true, required: true},
    code: { type: String, trim: true, required: true, unique: true },
	phone_number: { type: String, trim: true, required: true},
	name: { type: String, trim: true, required: true},
	season: { type: Number, default: 1 },
    created_at: { type: Date, default: new Date() },
    updated_at: { type: Date, default: new Date() },
}, { versionKey: false });

WinnerSchema.set('collection', 'winners');

const winnerSchema = mongoose.model<WinnerInterface & mongoose.Document>('winners', WinnerSchema);

export default winnerSchema;