import { axiosService } from "./axios";

class UserAPI {
  async getMany(qs) {
    return await axiosService.get(`/users`, qs);
  }
}

const userApi = new UserAPI();
export default userApi;
