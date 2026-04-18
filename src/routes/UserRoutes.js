const { Router } = require("express");
const { ListUser } = require("../controllers/User");

const route = Router();

route.get("/users", ListUser);

module.exports = route;