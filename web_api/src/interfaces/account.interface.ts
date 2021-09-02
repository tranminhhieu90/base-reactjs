export interface AccountInterface {
    _id: string;
    created_id: string;
    account_name: string;
    password: string;
    email: string;
    phone_number: number;
    scope_access: boolean;
    lock: boolean;
    status: string;
    created_at: Date;
    updated_at: Date;
}
