import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }

  UserLogin = (data) =>
    new Promise((resolve, reject) => {
      this.post("users/login", data)
        .then((res) => {
          resolve(res.token);
          localStorage.setItem("token", res.token);
        })
        .catch((err) => {
          //console.log("in try of user login");
          reject(err.response.data);
        });
    });

  isLoggedin = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      return true;
    } else {
      return false;
    }
  };
  getloggedinuser = () => {
    try {
      const jwt = localStorage.getItem("token");
      // console.log("getLoggedinData");
      // console.log(jwtDecode(jwt));
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedin()) {
      if (this.getloggedinuser().role == true) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };
  loggedInId = () => {
    return this.getloggedinuser()._id;
  };

  UserReg = (data) => this.post("users/register", data);

  getUserOrders = (id) => this.get("storage/allorder/user/" + id);
  getAllUsers = () => this.get("users/allusers");
  updateUser = (data) => this.post("users/update", data);

  getUserDetails = (id) => this.get("users/details/" + id);
  updateUserDetails = (id, data) => this.post("users/details/" + id, data);
  forgetPassword = (id, data) => this.post("users/forgetPassword/" + id, data);
  // UserReg = (data) =>
  //   new Promise((resolve, reject) => {
  //     this.postReg("users/register", data)
  //       .then((res) => {
  //         resolve();
  //       })
  //       .catch((err) => {
  //         //console.log("in try of user login");
  //         reject(err);
  //       });
  //   });
}

let userService = new UserService();
export default userService;
