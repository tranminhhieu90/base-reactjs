import api from '../../uitls/app.http';

export const analysis = async (obj) => {
    return await api.get(`/log/analysis`, { params: obj });
}

