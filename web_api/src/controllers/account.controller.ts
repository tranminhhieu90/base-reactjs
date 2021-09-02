import Controller from "interfaces/controller.interface";
import * as express from 'express';
import validationMiddleware from "../middlewares/validation.middleware";
import HttpException from "../exceptions/httpException";
import AccountService from "../services/account.service";
import { AccountCreateVal, AccountUpdateVal } from "../validates/account.validate";
import PaginatedResult from "../helper/paginatedResult";
import authMiddleware from "../middlewares/auth.middleware";
import { SendEmailHelper } from "../helper/sendEmailHelper";
import { Email_Change_Password_Context } from "../utils/constans";
import * as mongoose from 'mongoose';
import * as multer from "multer";
import * as formidable from 'formidable';
let fs = require('fs');

const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        cb(null, true);
    },
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            if (file.mimetype.includes('image'))
                next(null, 'src/uploads/images');
            else
                next(null, 'src/uploads/files');
        },
        filename: function (req, file, next) {
            if (file.mimetype.includes('image')) {
                const ext = file.mimetype.split('/')[1];
                next(null, "avatar" + '-' + Date.now() + '.' + ext);
            } else {
                next(null, Date.now() + '-' + file.originalname);
            }

        },
    })
});

class AccountController implements Controller {

    public router = express.Router();
    public path = '/account';
    public accountService = new AccountService();
    public objectId = mongoose.Types.ObjectId;
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router
    }
}
export default AccountController;