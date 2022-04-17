"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
// crud routes
router.route("/")
    .post(function (req, res) { return controllers_1.setController.addSet(req, res); })
    .get(function (req, res) { return controllers_1.setController.getAllSets(req, res); });
router.route("/:setId")
    .get(function (req, res) { return controllers_1.setController.getSet(req, res); })
    .put(function (req, res) { return controllers_1.setController.updateSet(req, res); })["delete"](function (req, res) { return controllers_1.setController.deleteSet(req, res); });
exports["default"] = router;
//# sourceMappingURL=set.routes.js.map