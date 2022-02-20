const API_URL = "https://qtutor-nestjs.herokuapp.com";

const ROLE = { CUSTOMER: "Customer", SUPER_ADMIN: "super-admin" };

const DEFAULT_AVATAR =
  "https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg";

const DEFAULT_FILTER = {
  perPage: 10,
  page: 1,
  orderBy: JSON.stringify({ createdAt: "DESC" }),
  filter: JSON.stringify({}),
  customFilter: JSON.stringify({}),
};

const TOAST_OPTIONS = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const SORTER_ORDER = {
  ascend: "ASC",
  descend: "DESC",
};

module.exports = {
  API_URL,
  ROLE,
  DEFAULT_AVATAR,
  DEFAULT_FILTER,
  TOAST_OPTIONS,
  SORTER_ORDER,
};
