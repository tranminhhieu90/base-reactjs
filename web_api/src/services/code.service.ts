import * as mongoose from 'mongoose';
import { CodeInterface } from '../interfaces/code.interface';
import CodeModel from '../models/code.model'
import WinnerModel from '../models/winner.model'
import RewardModel from '../models/reward.model'
import * as bcrypt from 'bcrypt';
import HttpException from '../exceptions/httpException';

class CodeService {
    public code = CodeModel;
    public winner = WinnerModel;
    public reward = RewardModel;

    public async spin(request:any) {
        try{
            //-1  time to use code
            const codeResult = await this.code.updateOne(
                {
                    "code": request.code.trim(),
                },
                {
                    $inc: { time: -1 },
                    updated_at: new Date()
                }
            );
            if (codeResult.nModified < 1) return false;
            //-1 quantity reward
            const rewardResult = await this.reward.updateOne(
                {
                    "_id": mongoose.Types.ObjectId(request.reward_id),
                },
                {
                    $inc: { quantity: -1 },
                    updated_at: new Date()
                }
            );
            if (rewardResult.nModified < 1) return false;
            // insert winner
            const winerResult = await this.winner.create(
                {
                    reward_id : mongoose.Types.ObjectId(request.reward_id),
                    reward_name : request.reward_name,
                    reward_quantity : 1,
                    code: request.code.trim(),
                    phone_number: request.phone_number.trim(),
                    name:request.name.trim(),
                    season: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            );
            if (!winerResult._id) return false;
            return true;
        } catch (e) {
            return false;
        }
    }


    public async checkOnGoingCode(code:string) {
        const result: any = await this.code.countDocuments({
            "code": code,
            "time": { $gte : 1}
        });
        if (result >= 1) return true;
        return false;
    }

    public async checkExistedCode(code:string) {
        const result: any = await this.code.countDocuments({
            "code": code,
        });
        if (result >= 1) return true;
        return false;
    }

    public async mockData(data:any) {
    	try {
	        const result = await this.code.insertMany(data);
	       	return true;
        } catch (e) {
		   return false;
		}
    }

    public async list() {
    	try{
    		return await this.code.find().sort({ created_at: -1 });
    	} catch (e) {
    		return [];
    	}
    }
}
export default CodeService;