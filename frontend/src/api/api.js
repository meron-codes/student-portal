import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Auth
export const login = (data) => API.post("/auth/login", data);
export const addUser = (data, token) =>
  API.post("/auth/add-user", data, { headers: { Authorization: `Bearer ${token}` } });

// Admin
export const addResult = (data, token) =>
  API.post("/admin/add-result", data, { headers: { Authorization: `Bearer ${token}` } });
export const editResult = (id, data, token) =>
  API.put(`/admin/edit-result/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteResult = (id, token) =>
  API.delete(`/admin/delete-result/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Student
export const getStudentResults = (student_id, token) =>
  API.get(`/student/results/${student_id}`, { headers: { Authorization: `Bearer ${token}` } });
export const getNotifications = (student_id, token) =>
  API.get(`/student/notifications/${student_id}`, { headers: { Authorization: `Bearer ${token}` } });
