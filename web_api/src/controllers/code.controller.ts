import Controller from "interfaces/controller.interface";
import * as express from 'express';
import validationMiddleware from "../middlewares/validation.middleware";
import HttpException from "../exceptions/httpException";
import authMiddleware from "../middlewares/auth.middleware";
import CodeService from "../services/code.service";
import WinnerService from "../services/winner.service";
import RewardService from "../services/reward.service";
import * as mongoose from 'mongoose';

class AccountController implements Controller {

    public router = express.Router();
    public path = '/code';
    public codeService = new CodeService();
    public winnerService = new WinnerService();
    public rewardService = new RewardService();
    public objectId = mongoose.Types.ObjectId;
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router
            // .get(this.path + '/mockData', this.mockData)
            .get(this.path + '/checkOnGoingCode' + '/:code', this.checkOnGoingCode)
            // .get(this.path + '/list', this.list)
            .put(this.path + '/spin', this.spin)
    }
    
    private spin = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const body = request.body;
            const code = request.body.code;
            const checkExistedCode = await this.codeService.checkExistedCode(code);
            if(!checkExistedCode) return next(new HttpException(400, `Mã không chính xác`));
            const checkOnGoingCode = await this.codeService.checkOnGoingCode(code);
            if(!checkOnGoingCode) return next(new HttpException(400, `Mã này đã sử dụng`));
            // check reward have enough stock;
            const checkRewardEnoughStock = await this.rewardService.checkEnoughStock(body.reward_id);
            if(!checkRewardEnoughStock) return next(new HttpException(400, `Sản phẩm không đúng hoặc đã hết`));
            const spinResult = await this.codeService.spin(body);
            if(!spinResult) return next(new HttpException(500, `Thất bại 1`));
            return response.send({
                status: 200,
                spinResult : spinResult
            });
        } catch (error) {
            return next(error);
        }
    }


    private checkOnGoingCode = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const code = request.params.code;
            const checkExistedCode = await this.codeService.checkExistedCode(code);
            if(!checkExistedCode) return next(new HttpException(400, `Mã không chính xác`));
            const checkOnGoingCode = await this.codeService.checkOnGoingCode(code);
            if(!checkOnGoingCode) return next(new HttpException(400, `Mã này đã sử dụng`));
            return response.send({
                status : 200,
                result : checkOnGoingCode
            });
        } catch (error) {
            return next(error);
        }
    }

    public async mockCode(length:number) : Promise<string> {
		var code = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
			code += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
        const checkExistedCode = await this.codeService.checkExistedCode(code);
        if (checkExistedCode) return await this.mockCode(length);   
	    return code;
	}

    private list = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const result =  await this.codeService.list();
            let finalResult:string = "";
            for (const e of result) {
			  finalResult += e.code + "/"
			}
			finalResult = finalResult.slice(0,-1);
            return response.send({
                status: 200,
                result: finalResult
            });
        }
        catch (err) {
            return next(err);
        }
    }

    private mockData = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
        	const mockDatas:any = [];
        	for(let i=0;i<3000;i++){
        		const code = await this.mockCode(7);
        		mockDatas.push({
        			code : code,
        			created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
        			created_at: new Date(),
                	updated_at: new Date()
        		});
        	}
            const result = await this.codeService.mockData(mockDatas);
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

// check duplicate code in db
// db.getCollection('codes').aggregate([
//     {"$group" : { "_id": "$code", "count": { "$sum": 1 } } },
//     {
//        "$match": { "count": { $lte: 1 } }
//     },
//     {"$project": {"code" : "$_id", "_id" : 0} },
    
// ]);
