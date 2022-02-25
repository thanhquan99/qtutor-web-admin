import { axiosService } from "./axios";

class DashboardAPI {
  async getSystemDashboard(data) {
    return await axiosService.get(`/super-admin/system-dashboard`, data);
  }
}

const dashboardApi = new DashboardAPI();
export default dashboardApi;
