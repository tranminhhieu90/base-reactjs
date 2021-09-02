import Controller from "interfaces/controller.interface";
import * as express from 'express';
import validationMiddleware from "../middlewares/validation.middleware";
import HttpException from "../exceptions/httpException";
import authMiddleware from "../middlewares/auth.middleware";
import RewardService from "../services/reward.service";
import * as mongoose from 'mongoose';

class AccountController implements Controller {

    public router = express.Router();
    public path = '/reward';
    public rewardService = new RewardService();
    public objectId = mongoose.Types.ObjectId;
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router
            .get(this.path + '/mockData', this.mockData)
            .get(this.path + '/list', this.list)
    }

    private list = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const result =  await this.rewardService.list();
            return response.send({
                status: 200,
                result
            });
        }
        catch (err) {
            return next(err);
        }
    }

    private mockData = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const result =  await this.rewardService.mockData();
            return response.send({
                status: 200,
                result
            });
        }
        catch (err) {
            return next(err);
        }
    }
}
export default AccountController;