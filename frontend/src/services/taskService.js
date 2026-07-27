import api from "../api/axios";

export const getTasks = async () => {
    const response = await api.get("tasks/");
    return response.data.results;
};

export const createTask = async (task) => {
    const response = await api.post("tasks/", task);
    return response.data;
};

export const deleteTask = async (id) => {
    await api.delete(`tasks/${id}/`);
};

export const completeTask = async (id) => {
    const response = await api.post(`tasks/${id}/complete/`);
    return response.data;
};

export const updateTask = async (id, task) => {
    const response = await api.put(`tasks/${id}/`, task);
    return response.data;
};