"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var SessionController = /** @class */ (function () {
    function SessionController(sessionService) {
        this.sessionService = sessionService;
    }
    SessionController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.sessionService.createSession(req.body)
                    .then(function (session) {
                    res.status(201).send({
                        message: "Session created",
                        session: session
                    });
                })["catch"](function (err) {
                    res.status(500).send({
                        message: "Error creating session",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    SessionController.prototype.findAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.sessionService.getSessions()
                    .then(function (sessions) {
                    res.status(200).send({
                        message: "Sessions retrieved",
                        sessions: sessions
                    });
                })["catch"](function (err) {
                    res.status(500).send({
                        message: "Error retrieving sessions",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    SessionController.prototype.findOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = +req.params.id;
                this.sessionService.getSession(id)
                    .then(function (session) {
                    res.status(200).send({
                        message: "Session retrieved",
                        session: session
                    });
                })["catch"](function (err) {
                    res.status(500).send({
                        message: "Error retrieving session",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    SessionController.prototype.complete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, state, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = +req.params.id;
                        return [4 /*yield*/, this.sessionService.getSessionState(id)];
                    case 1:
                        state = _a.sent();
                        if (!state) {
                            return [2 /*return*/, res.status(404).send({
                                    message: "session with id ".concat(id, " not found.")
                                })];
                        }
                        if (state.completed) {
                            return [2 /*return*/, res.status(403).send({
                                    message: "Session already completed"
                                })];
                        }
                        if (state.startTime.getTime() + state.complex.time.getTime() < new Date().getTime()) {
                            return [2 /*return*/, res.status(403).send({
                                    message: "Session expired"
                                })];
                        }
                        return [4 /*yield*/, this.sessionService.completeSession(id, req.body)];
                    case 2:
                        result = _a.sent();
                        res.status(200).json({
                            message: "Session completed",
                            result: result
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionController.prototype.updateOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = +req.params.id;
                this.sessionService.updateSession(id, req.body)
                    .then(function (session) {
                    res.status(200).send({
                        message: "Session updated",
                        session: session
                    });
                })["catch"](function (err) {
                    res.status(500).send({
                        message: "Error updating session",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    SessionController.prototype.deleteSession = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = +req.params.id;
                this.sessionService.deleteSession(id)
                    .then(function (session) {
                    res.status(200).send({
                        message: "Session deleted",
                        session: session
                    });
                })["catch"](function (err) {
                    res.status(500).send({
                        message: "Error deleting session",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    return SessionController;
}());
exports["default"] = SessionController;
//# sourceMappingURL=session.controller.js.map