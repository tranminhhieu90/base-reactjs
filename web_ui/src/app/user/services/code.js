import api from '../../uitls/app.http';


export const checkOnGoingCode = async (code) => {
    return await api.get(`/code/checkOnGoingCode/${code}`);
}

export const spin = async (obj) => {
    return await api.put(`/code/spin`, obj);
}
