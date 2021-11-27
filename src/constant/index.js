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

module.exports = {
  API_URL,
  ROLE,
  DEFAULT_AVATAR,
  DEFAULT_FILTER,
};
