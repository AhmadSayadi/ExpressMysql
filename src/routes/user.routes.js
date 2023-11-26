const router = require("express").Router();
const {index} = require("../controllers/user.controller");

router.route("/").get(index);



module.exports = router;