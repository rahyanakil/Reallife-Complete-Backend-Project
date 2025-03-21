export const Registration = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "Registration Successfull" });
};

export const Login = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "Login Successfull" });
};

export const ProfileDetails = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "ProfileDetails Successfull" });
};

export const profileUpdate = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "ProfileUpdate Successfull" });
};

export const EmailVerify = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "EmailVerify Successfull" });
};
export const CodeVerify = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "CodeVerify Successfull" });
};

export const ResetPassword = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "ResetPassword Successfull" });
};
