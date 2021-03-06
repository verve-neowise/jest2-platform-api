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
var ComplexController = /** @class */ (function () {
    function ComplexController(complexService) {
        this.complexService = complexService;
    }
    ComplexController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, complex, oldComplex, newComplex, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.payload.userId;
                        complex = req.body;
                        complex.userId = userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.complexService.findByPath(complex.path)];
                    case 2:
                        oldComplex = _a.sent();
                        if (oldComplex) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "Complex with path: ".concat(complex.path, " already exists!")
                                })];
                        }
                        return [4 /*yield*/, this.complexService.createOne(complex)];
                    case 3:
                        newComplex = _a.sent();
                        res.json({
                            message: "Complexes retrieved",
                            newComplex: newComplex
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        res.status(500).json({
                            message: "Error retrieving complexes",
                            error: err_1
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ComplexController.prototype.findAll = function (req, res) {
        var userId = req.payload.userId;
        this.complexService.findAll(userId)
            .then(function (complexes) {
            res.json({
                message: "Complex retrieved",
                complexes: complexes
            });
        })["catch"](function (err) {
            res.status(500).json({
                message: "Error retrieving complexes",
                error: err
            });
        });
    };
    ComplexController.prototype.findOne = function (req, res) {
        var id = +req.params.id;
        this.complexService.findOne(id)
            .then(function (complex) {
            res.json({
                message: "Set retrieved",
                complex: complex
            });
        })["catch"](function (err) {
            res.status(500).json({
                message: "Error retrieving complex",
                error: err
            });
        });
    };
    ComplexController.prototype.updateOne = function (req, res) {
        var id = +req.params.id;
        var complex = req.body;
        complex.id = id;
        this.complexService.updateOne(complex)
            .then(function (complex) {
            res.json({
                message: "Complex updated",
                complex: complex
            });
        })["catch"](function (err) {
            res.status(500).json({
                message: "Error updating complex",
                error: err
            });
        });
    };
    ComplexController.prototype.deleteOne = function (req, res) {
        var id = +req.params.id;
        this.complexService.deleteOne(id)
            .then(function (complex) {
            res.json({
                message: "Complex deleted",
                complex: complex
            });
        })["catch"](function (err) {
            res.status(500).json({
                message: "Error deleting Complex",
                error: err
            });
        });
    };
    return ComplexController;
}());
exports["default"] = ComplexController;
//# sourceMappingURL=complex.controller.js.map