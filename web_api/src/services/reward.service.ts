import * as mongoose from 'mongoose';
import { RewardInterface } from '../interfaces/reward.interface';
import RewardModel from '../models/reward.model'
import * as bcrypt from 'bcrypt';
import HttpException from '../exceptions/httpException';

class RewardService {
    public reward = RewardModel;

    public async mockData() {
    	try {
	        const result = await this.reward.insertMany(
	        	[
	                {
	                    name: "Thẻ điện thoại 50k",
	                    type: "CARD",
	                    quantity: 3,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Thẻ điện thoại 100k",
	                    type: "CARD",
	                    quantity: 1,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Gói tinder gold 1 tháng",
	                    type: "PACKAGE",
	                    quantity: 1,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Bình nước",
	                    type: "ORTHER",
	                    quantity: 25,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Iphone",
	                    type: "PHONE",
	                    quantity: 0,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Airpod",
	                    type: "PHONE",
	                    quantity: 0,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Gói tinder plus 1 tuần",
	                    type: "PACKAGE",
	                    quantity: 20,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Combo 39k",
	                    type: "COMBO",
	                    quantity: 0,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Sữa rửa mặt",
	                    type: "SKINCARE",
	                    quantity: 115,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "BBcream cho nam",
	                    type: "SKINCARE",
	                    quantity: 0,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                }
	            ]
	       	);
	       	return true;
        } catch (e) {
		   return false;
		}
    }

    public async checkEnoughStock(_id:string) {
        const result: any = await this.reward.countDocuments({
            _id: mongoose.Types.ObjectId(_id),
            quantity : { $gte : 1}
        });
        if (result >= 1) return true;
        return false;
    }

    public async list() {
    	try{
    		return await this.reward.find().skip(0).limit(10).sort({ created_at: 1 });
    	} catch (e) {
    		return false;
    	}
    }


}
export default RewardService;