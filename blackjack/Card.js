"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    Card.prototype.getValue = function () {
        return this.value;
    };
    return Card;
}());
exports.default = Card;
