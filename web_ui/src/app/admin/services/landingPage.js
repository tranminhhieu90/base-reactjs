import api from "../../uitls/app.http";

export const getListWinner = async () => {
  return await api.get(`/winner/list`);
};
