const express = require("express");

const RegisterRoutes = require("./auth/register");
const LoginRoutes = require("./auth/login");
const ProfileRoute = require("./profile")
const Home = require("./home")
const UploadHandler = require("./uploadImages")

const router = express.Router();

router.get("/", Home)
router.use("/register", RegisterRoutes);
router.use("/login", LoginRoutes);
router.use("/profile", ProfileRoute);
router.use("/uploads", UploadHandler);

module.exports = router;