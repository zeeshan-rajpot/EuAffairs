import apiClient from '../utils/apiClient';


const login = async (credentials) => {
    try {
        const response = await apiClient.post('user/login', credentials);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
const signup = async (credentials) => {
  try {
      const response = await apiClient.post('user/register', credentials);
      return response.data;
  } catch (error) {
      console.error("Error logging in:", error);
      throw error;
  }
};



const uploadRequest = async (uploadData) => {
    try {
      const response = await apiClient.post(`user/request` , uploadData);
      return response.data;
    } catch (error) {
      console.error("Error fetching moods:", error);
      throw error;
    }
  };
const addIntrest = async (uploadData) => {
    try {
      const response = await apiClient.post(`user/interests` , uploadData);
      return response.data;
    } catch (error) {
      console.error("Error fetching moods:", error);
      throw error;
    }
  };


  const getProfile = async () => {
    try {
      const response = await apiClient.get(`user/profile`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };
    const getRequest = async () => {
    try {
      const response = await apiClient.get(`user/requests`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }; 
  
  const getArticle = async () => {
    try {
      const response = await apiClient.get(`user/articles`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };
   const getReport = async () => {
    try {
      const response = await apiClient.get(`user/reports`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }; 
  const getNews = async () => {
    try {
      const response = await apiClient.get(`user/news`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }; 
  const getInterests = async () => {
    try {
      const response = await apiClient.get(`user/interests`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };

export default {
    login,
    uploadRequest,
    addIntrest,
    getRequest,
    getArticle,
    getReport,
    getNews,
    getProfile,
    getInterests,
    signup,
};