// function for login
// function for signup

const login = (req, res) => {
  res.send("welcome to login page");
};
const signup = (req, res) => {
  res.send({ msg: "welcome to signup ", data: req.body });
};

export { login, signup };
