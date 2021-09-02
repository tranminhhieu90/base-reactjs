export interface WinnerInterface {
    _id: string;
    reward_id : string,
    reward_name : string,
    reward_quantity : number,
    code: string;
    phone_number: string;
    name: string;
    season: number;
    created_at: Date;
    updated_at: Date;
}