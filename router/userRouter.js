const router = require ("express").Router()
const { SignUp, login, logout } = require("../controller/userController.js")
const { CreateValidator, loginValidator } = require("../middleware/validator.js")

 

router.post("/sign-up", CreateValidator, SignUp)
router.post("/sign-in",loginValidator, login )
router.post("/sign-out", logout )

module.exports = router