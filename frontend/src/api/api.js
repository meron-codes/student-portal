import axios from "axios";

// Base URL for backend
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000", // fallback if env not set
});

// Attach Authorization header if token exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ======================= AUTH =======================
export const loginUser = async (email, password) => {
  try {
    const res = await API.post("/api/auth/login", { email, password });
    if (res.data.token) {
      // Save token + role in localStorage for ProtectedRoute
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
    }
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Login failed" };
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

// ======================= USERS =======================
export const getUsers = () => API.get("/users");
export const getUserById = (id) => API.get(`/users/${id}`);
export const createUser = (data) => API.post("/users", data);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);

// ======================= STUDENTS =======================
export const getStudents = () => API.get("/students");
export const getStudentById = (id) => API.get(`/students/${id}`);
export const createStudent = (data) => API.post("/students", data);
export const updateStudent = (id, data) => API.put(`/students/${id}`, data);
export const deleteStudent = (id) => API.delete(`/students/${id}`);

// ======================= TEACHERS =======================
export const getTeachers = () => API.get("/teachers");
export const getTeacherById = (id) => API.get(`/teachers/${id}`);
export const createTeacher = (data) => API.post("/teachers", data);
export const updateTeacher = (id, data) => API.put(`/teachers/${id}`, data);
export const deleteTeacher = (id) => API.delete(`/teachers/${id}`);

// ======================= SUBJECTS =======================
export const getSubjects = () => API.get("/subjects");
export const getSubjectById = (id) => API.get(`/subjects/${id}`);
export const createSubject = (data) => API.post("/subjects", data);
export const updateSubject = (id, data) => API.put(`/subjects/${id}`, data);
export const deleteSubject = (id) => API.delete(`/subjects/${id}`);

// ======================= RESULTS =======================
export const getResults = () => API.get("/results");
export const getResultById = (id) => API.get(`/results/${id}`);
export const createResult = (data) => API.post("/results", data);
export const updateResult = (id, data) => API.put(`/results/${id}`, data);
export const deleteResult = (id) => API.delete(`/results/${id}`);

// ======================= ANNOUNCEMENTS =======================
export const getAnnouncements = () => API.get("/announcements");
export const getAnnouncementById = (id) => API.get(`/announcements/${id}`);
export const createAnnouncement = (data) => API.post("/announcements", data);
export const updateAnnouncement = (id, data) => API.put(`/announcements/${id}`, data);
export const deleteAnnouncement = (id) => API.delete(`/announcements/${id}`);

// ======================= SCHEDULES =======================
export const getSchedules = () => API.get("/schedules");
export const getScheduleById = (id) => API.get(`/schedules/${id}`);
export const createSchedule = (data) => API.post("/schedules", data);
export const updateSchedule = (id, data) => API.put(`/schedules/${id}`, data);
export const deleteSchedule = (id) => API.delete(`/schedules/${id}`);

// ======================= OPPORTUNITIES =======================
export const getOpportunities = () => API.get("/opportunities");
export const getOpportunityById = (id) => API.get(`/opportunities/${id}`);
export const createOpportunity = (data) => API.post("/opportunities", data);
export const updateOpportunity = (id, data) => API.put(`/opportunities/${id}`, data);
export const deleteOpportunity = (id) => API.delete(`/opportunities/${id}`);

// ======================= FEEDBACK =======================
export const getFeedbacks = () => API.get("/feedback");
export const getFeedbackById = (id) => API.get(`/feedback/${id}`);
export const createFeedback = (data) => API.post("/feedback", data);
export const updateFeedback = (id, data) => API.put(`/feedback/${id}`, data);
export const deleteFeedback = (id) => API.delete(`/feedback/${id}`);

export default API;
