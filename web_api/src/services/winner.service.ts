import * as mongoose from 'mongoose';
import WinnerModel from '../models/winner.model'
import * as bcrypt from 'bcrypt';
import HttpException from '../exceptions/httpException';

class RewardService {
    public winner = WinnerModel;

    public async create(request:any) {
    	// try{
    	// 	const result = await this.winner.create(
	    //         {
	    //         	reward_id : mongoose.Type.Object(request.reward_id),
					// reward_name : request.reward_name,
					// reward_quantity : request.reward_quantity,
	    //             code: request.code.trim(),
				 //    phone_number: request.phone_number.trim(),
				 //    name:request.name.trim(),
				 //    season: 1,
				 //    created_at: new Date(),
				 //    updated_at: new Date()
	    //         }
	    //     );
	    //     if (!result._id) return false;
	    //     return true;
    	// } catch (e) {
    	// 	return false;
    	// }
    }

    public async list() {
    	try{
    		return await this.winner.find().sort({ created_at: -1 });
    	} catch (e) {
    		return false;
    	}
    }
}
export default RewardService;