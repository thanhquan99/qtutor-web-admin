import { axiosService } from "./axios";

class StudentAPI {
  async getMany(qs) {
    return await axiosService.get(`/super-admin/students`, qs);
  }

  async updateOne(id, data) {
    return await axiosService.patch(`/super-admin/students/${id}`, data);
  }
}

const studentApi = new StudentAPI();
export default studentApi;
