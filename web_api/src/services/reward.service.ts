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
	                    name: "Thẻ ĐT 50k",
	                    type: "CARD",
	                    quantity: 3,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Thẻ ĐT 100k",
	                    type: "CARD",
	                    quantity: 1,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Gói Tinder Gold ",
	                    type: "PACKAGE",
	                    quantity: 1,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Bình giữ nhiệt",
	                    type: "ORTHER",
	                    quantity: 25,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Iphone 12 Pro",
	                    type: "PHONE",
	                    quantity: 0,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Airpod Pro",
	                    type: "PHONE",
	                    quantity: 0,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Gói Tinder + ",
	                    type: "PACKAGE",
	                    quantity: 5,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Box Trial 149k",
	                    type: "COMBO",
	                    quantity: 0,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "Sữa rửa mặt Nerman",
	                    type: "SKINCARE",
	                    quantity: 115,
	                    season: 1,
	                    lock: 0,
	                    created_id : mongoose.Types.ObjectId("612faeda1e223e4d16cc571d"),
	                    created_at: new Date(),
	                    updated_at: new Date()
	                },
	                {
	                    name: "BBcream Nerman",
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