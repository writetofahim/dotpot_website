const { login } = require("../controllers/authControler")

const router = require("express").Router()

router.post("/login", login);

module.exports = router