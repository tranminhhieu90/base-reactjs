import api from '../../uitls/app.http';


export const register = async (obj) => {
    return await api.post(`/account/register`, obj);
}

export const forgetPassword = async (obj) => {
    return await api.post(`/account/forgetPassword`, { params: obj });
}

export const list = async (obj) => {
    return await api.get(`/account/list`, { params: obj });
}

export const create = async (obj) => {
    return await api.post(`/account/create`, obj);
}

export const update = async (obj) => {
    return await api.put(`/account/update`, obj);
}
export const delItem = async (_id) => {
    return await api.delete(`/account/delete/${_id}`);
}

export const lock = async (obj) => {
    return await api.post(`/account/lock`, obj);
}

export const changePassword = async (obj) => {
    return await api.patch(`/account/changePassword`, obj);
}

export const analysis = async (obj) => {
    return await api.get(`/account/analysis`, { params: obj });
}

export const updateBalance = async (obj) => {
    return await api.patch(`/account/updateBalance`, obj);
}

export const getAll = async () => {
    return await api.get(`/account/getAll`);
}

export const exportDB = async () => {
    return await api.get(`/account/exportDB`, { responseType: 'arraybuffer' });
}