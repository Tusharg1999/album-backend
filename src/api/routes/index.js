const express = require("express");

const RegisterRoutes = require("./auth/register");
const LoginRoutes = require("./auth/login");
const { authorizeToken } = require("../middlewares/authorization");

const router = express.Router();

router.get("/", authorizeToken, (req, res) => {
    res.send(req.user)
})
router.use("/register", RegisterRoutes);
router.use("/login", LoginRoutes);

module.exports = router;