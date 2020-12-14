"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Hand_1 = __importDefault(require("./Hand"));
var Turn = /** @class */ (function () {
    function Turn(user, hand) {
        this.user = user;
        this.hands = [hand];
    }
    Turn.prototype.getHands = function () {
        return this.hands;
    };
    Turn.prototype.addHand = function () {
        var hand = new Hand_1.default();
        this.hands.push(hand);
        return hand;
    };
    Turn.prototype.removeHand = function (id) {
        this.hands = this.hands.filter(function (hand) {
            return hand.getId() !== id;
        });
    };
    return Turn;
}());
exports.default = Turn;
