import * as mongoose from 'mongoose';
import { AccountInterface } from '../interfaces/account.interface';
import AccountModel from '../models/account.model'
import * as bcrypt from 'bcrypt';
import HttpException from '../exceptions/httpException';

class AccountService {
    public account = AccountModel;
}
export default AccountService;