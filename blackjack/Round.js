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
var prompts_1 = __importDefault(require("prompts"));
var Card_1 = __importDefault(require("./Card"));
var Turn_1 = __importDefault(require("./Turn"));
var Hand_1 = __importDefault(require("./Hand"));
var Round = /** @class */ (function () {
    function Round(users) {
        this.turns = [];
        this.users = users;
        this.shoe = this.generateShoe();
    }
    Round.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, user, hand, turn, _b, _c, turn;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        for (_i = 0, _a = this.users; _i < _a.length; _i++) {
                            user = _a[_i];
                            hand = new Hand_1.default();
                            hand.addCard(this.shoe.pop());
                            hand.addCard(this.shoe.pop());
                            turn = new Turn_1.default(user, hand);
                            this.turns.push(turn);
                        }
                        _b = 0, _c = this.turns;
                        _d.label = 1;
                    case 1:
                        if (!(_b < _c.length)) return [3 /*break*/, 4];
                        turn = _c[_b];
                        return [4 /*yield*/, this.processTurn(turn)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log(this.turns);
                        return [2 /*return*/];
                }
            });
        });
    };
    Round.prototype.processTurn = function (turn) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, hand, response, card;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = turn.getHands();
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        hand = _a[_i];
                        _b.label = 2;
                    case 2:
                        if (!hand.isValid()) return [3 /*break*/, 4];
                        console.log(hand.getPoints());
                        return [4 /*yield*/, prompts_1.default({
                                type: 'select',
                                name: 'value',
                                message: 'Choose an action',
                                choices: [
                                    { title: 'Hit', value: 'Hit' },
                                    { title: 'Stand', value: 'Stand' },
                                    { title: 'Split', value: 'Split' },
                                ],
                                initial: 0
                            })];
                    case 3:
                        response = _b.sent();
                        if (response.value === 'Hit') {
                            card = this.shoe.pop();
                            hand.addCard(card);
                        }
                        else if (response.value === 'Stand') {
                            return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 2];
                    case 4:
                        if (!hand.isValid()) {
                            console.log('Bust!');
                        }
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Round.prototype.generateShoe = function () {
        var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        var suits = ['Spade', 'Club', 'Diamond', 'Heart'];
        var shoe = [];
        for (var i = 0; i < Round.NUMBER_OF_DECK_IN_SHOE; i++) {
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                for (var _a = 0, suits_1 = suits; _a < suits_1.length; _a++) {
                    var suit = suits_1[_a];
                    shoe.push(new Card_1.default(value, suit));
                }
            }
        }
        this.suffleShoe(shoe);
        return shoe;
    };
    Round.prototype.suffleShoe = function (shoe) {
        for (var i = 0; i < shoe.length; i++) {
            var j = Math.floor(Math.random() * (shoe.length - i)) + i;
            var temp = shoe[i];
            shoe[i] = shoe[j];
            shoe[j] = temp;
        }
    };
    Round.NUMBER_OF_DECK_IN_SHOE = 5;
    return Round;
}());
exports.default = Round;
