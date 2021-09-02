import * as mongoose from 'mongoose';
import { CodeInterface } from '../interfaces/code.interface';

const CodeSchema = new mongoose.Schema({
    code: { type: String, trim: true, required: true, unique: true },
    time: { type: Number, default: 1 },
    lock: { type: Boolean, default: false },
    created_id: { type: mongoose.Schema.Types.ObjectId },
    created_at: { type: Date, default: new Date() },
    updated_at: { type: Date, default: new Date() },
}, { versionKey: false });

CodeSchema.set('collection', 'codes');

const codeSchema = mongoose.model<CodeInterface & mongoose.Document>('codes', CodeSchema);

export default codeSchema;