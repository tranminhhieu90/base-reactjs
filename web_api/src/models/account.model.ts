import * as mongoose from 'mongoose';
import { AccountInterface } from '../interfaces/account.interface';

const AccountSchema = new mongoose.Schema({
    account_name: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, trim: true, unique: true, required: true },
    phone_number: { type: Number, trim: true },
    lock: { type: Boolean, default: false },
    status: { type: String, uppercase: true, trim: true },
    created_id: { type: mongoose.Schema.Types.ObjectId },
    scope_access: { type: String, uppercase: true, trim: true },
    created_at: { type: Date, default: new Date() },
    updated_at: { type: Date, default: new Date() },
}, { versionKey: false });

AccountSchema.set('collection', 'accounts');

const accountSchema = mongoose.model<AccountInterface & mongoose.Document>('accounts', AccountSchema);

export default accountSchema;