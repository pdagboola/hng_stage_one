const { Router } = require("express");
const indexController = require("../controllers/indexController");

const router = Router();

router.get("/home", indexController);

module.exports = router;
