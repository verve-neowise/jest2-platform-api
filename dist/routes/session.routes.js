"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
router.route('/')
    .get(function (req, res) { return controllers_1.sessionController.findAll(req, res); })
    .post(function (req, res) { return controllers_1.sessionController.create(req, res); });
router.route('/:id')
    .get(function (req, res) { return controllers_1.sessionController.findOne(req, res); })
    .put(function (req, res) { return controllers_1.sessionController.updateOne(req, res); });
exports["default"] = router;
//# sourceMappingURL=session.routes.js.map