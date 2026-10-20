const express = require("express");
const cors = require("cors");
const { login ,refreshtoken} = require("../controller/login");

const router = express.Router();

router.use(cors());

router.post("/login", login);
router.post("/refresh-token",refreshtoken)

module.exports = router;