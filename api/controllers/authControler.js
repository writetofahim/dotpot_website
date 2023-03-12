const login = (req, res) => {
  const { email, password } = req.body;
  res.send(email + ' ' + password)
}

const register = (req, res) => {
  const { email, password } = req.body;
  res.status(300).json({email, password})
}


module.exports = {
  login
}