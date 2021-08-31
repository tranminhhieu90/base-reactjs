export const PAGE_SIZE_DEFAULT = 10;
export const PAGE_NUM_DEFAULT = 1;

export const filterObject = {
    page_number: PAGE_NUM_DEFAULT,
    page_size: PAGE_SIZE_DEFAULT
}
export const ROLES = {
    ADMIN: 'ADMIN',
    USER: 'USER',
}
export const MESSAGESERR = {
    field_required: 'Bạn không được để trống.',
    passW_required: 'Mật khẩu phải có ít nhất 6 kí tự.',
    passW_confirm_wrong: 'Mật khẩu xác nhận không đúng',
    email_required: 'Email nhập không đúng định dạng (vd: a@gmail.com)',
}

// action Reduct
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const LOAD_PRODUCT = 'LOAD_PRODUCT';

export const ORDER_STATUS = ['Đơn hàng mới', 'Đã duyệt', 'Không được thông qua', 'Đã đặt hàng', 'Tại kho Mỹ', 'Tại kho Việt Nam', 'Đã giao cho khách hàng', 'Đơn hàng bị hủy'];
export const DEPOSIT_STATUS = ['Đơn nạp mới', 'Đã duyệt', 'Không được thông qua'];
export const STATUS_COL = ['#565e64bf', '#3dd5f3', '#ffc720', '#0a58ca', '#d0743fd1', '#ea97d5bd', '#146c43', '#fb2a08'];
export const formatDateToStr = (date = new Date()) => {
    const d = new Date(date);
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    const mont = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
    return `${day}-${mont}-${d.getFullYear()}`;
}

export const RATE$ = 24400;

export const formatCurrency = (amount = 0) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.ceil(amount)).replaceAll('.', ',');
}

export const PayMethods = {
    atm: 'Chuyển khoản ngân hàng',
    momo: 'Chuyển khoản MoMo',
    viettelPay: 'Chuyển khoản ViettelPay',
    airPay: 'Chuyển khoản AirPay'
}
