import * as mongoose from 'mongoose';
import { RewardInterface } from '../interfaces/reward.interface';

const Reward = new mongoose.Schema({
    name: { type: String, trim: true, required: true, unique: true },
    type: { type: String, trim: true, required: true, unique: true },
    quantity: { type: Number, default: 0 },
    season: { type: Number, default: 1 },
    lock: { type: Boolean, default: false },
    created_id: { type: mongoose.Schema.Types.ObjectId },
    created_at: { type: Date, default: new Date() },
    updated_at: { type: Date, default: new Date() },
}, { versionKey: false });

Reward.set('collection', 'rewards');

const rewardSchema = mongoose.model<RewardInterface & mongoose.Document>('rewards', Reward);

export default rewardSchema;