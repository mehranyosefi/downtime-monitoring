import { auth } from "./auth";
import { user } from "./user";
import general from "./general";
import { password } from "./password";

export default {
  auth,
  user,
  ...general,
  password,
  mamd: "ممد",
};
