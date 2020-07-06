import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '4ab334bc-c44a-4a21-a3c6-08016163f3f7',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn('Absolute method. Please use profileAPI object');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`/auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`/auth/login`, { email, password, rememberMe });
  },
  logout(email, password, rememberMe = false) {
    return instance.delete(`/auth/login`);
  },
};
