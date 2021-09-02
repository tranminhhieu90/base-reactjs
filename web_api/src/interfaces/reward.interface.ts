export interface RewardInterface {
    _id: string;
    name: string;
    type: string;
    quantity: number;
    season: number;
    lock: number;
    created_id: string;
    created_at: Date;
    updated_at: Date;
}