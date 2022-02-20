import { axiosService } from "./axios";

class AuthAPI {
  async login(data) {
    return await axiosService.post(`/super-admin/auth/login`, data);
  }
}

const authApi = new AuthAPI();
export default authApi;
