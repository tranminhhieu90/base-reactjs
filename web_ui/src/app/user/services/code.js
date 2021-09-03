import api from '../../uitls/app.http';


export const checkOnGoingCode = async (obj) => {
    return await api.get(`/code/checkOnGoingCode`, { params: obj });
}

