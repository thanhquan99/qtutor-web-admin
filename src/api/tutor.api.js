import { axiosService } from "./axios";

class TutorAPI {
  async getMany(qs) {
    return await axiosService.get(`/super-admin/tutors`, qs);
  }

  async updateOne(id, data) {
    return await axiosService.patch(`/super-admin/tutors/${id}`, data);
  }
}

const tutorApi = new TutorAPI();
export default tutorApi;
