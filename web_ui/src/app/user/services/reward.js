import api from '../../uitls/app.http';


export const list = async (obj) => {
    return await api.get(`/reward/list`);
}

