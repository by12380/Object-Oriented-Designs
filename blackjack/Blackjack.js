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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./User"));
var Round_1 = __importDefault(require("./Round"));
var prompts_1 = __importDefault(require("prompts"));
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.users = [];
    }
    BlackJack.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var round;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.addUserPrompt()];
                    case 1:
                        _a.sent();
                        if (this.users.length === 0) {
                            console.log('No users in game');
                            return [2 /*return*/];
                        }
                        round = new Round_1.default(this.users);
                        return [4 /*yield*/, round.start()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.removeUserPrompt()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BlackJack.prototype.addUserPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var shouldAddUserResponse, _a, name_1, balance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 3];
                        return [4 /*yield*/, prompts_1.default({
                                type: 'select',
                                name: 'value',
                                message: 'Add User?',
                                choices: [
                                    { title: 'Yes', value: 'y' },
                                    { title: 'No', value: 'n' },
                                ],
                                initial: 0
                            })];
                    case 1:
                        shouldAddUserResponse = _b.sent();
                        if (shouldAddUserResponse.value === 'n') {
                            return [3 /*break*/, 3];
                        }
                        return [4 /*yield*/, prompts_1.default([
                                {
                                    type: 'text',
                                    name: 'name',
                                    message: 'Name:'
                                },
                                {
                                    type: 'text',
                                    name: 'balance',
                                    message: 'Balance:',
                                }
                            ])];
                    case 2:
                        _a = _b.sent(), name_1 = _a.name, balance = _a.balance;
                        this.users.push(new User_1.default(name_1, balance));
                        return [3 /*break*/, 0];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlackJack.prototype.removeUserPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userIdsToRemove, _i, _a, user, removeUserResponse;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userIdsToRemove = new Set();
                        _i = 0, _a = this.users;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        user = _a[_i];
                        return [4 /*yield*/, prompts_1.default({
                                type: 'select',
                                name: 'value',
                                message: "Remove user #" + user.getId() + "?",
                                choices: [
                                    { title: 'Yes', value: 'y' },
                                    { title: 'No', value: 'n' },
                                ],
                                initial: 0
                            })];
                    case 2:
                        removeUserResponse = _b.sent();
                        if (removeUserResponse.value === 'y') {
                            userIdsToRemove.add(user.getId());
                        }
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.users = this.users.filter(function (user) {
                            return !userIdsToRemove.has(user.getId());
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return BlackJack;
}());
var blackJack = new BlackJack();
blackJack.start();
