import loginRegisterService from "../service/loginRegisterService";

const handleRegister = async (req, res) => {
  try {
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(500).json({
        EM: "Missing required parameters",
        EC: "1",
        DT: "",
      });
    }
    if (!req.body.password || req.body.password < 4) {
      return res.status(500).json({
        EM: "Your password must have more than 3 letters",
        EC: "1",
        DT: "",
      });
    }

    let data = await loginRegisterService.registerNewUser(req.body);
    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: "", //date
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const handleLogin = async (req, res) => {
  try {
    let data = await loginRegisterService.handleUserLogin(req.body);
    // set cookie
    if (data && data.DT && data.DT.access_token) {
      res.cookie("jwt", data.DT.access_token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
    }
    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: data.DT, //date
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const handleLogout = async (req, res) => {
  try {
    // clear cookie
    res.clearCookie("jwt");
    return res.status(200).json({
      EM: "Log out success", //error message
      EC: 0, //error code
      DT: "", //date
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};
module.exports = {
  handleRegister,
  handleLogin,
  handleLogout,
};
