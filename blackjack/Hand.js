"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cardToPointsMap = {
    'A1': 1,
    'A11': 11,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
};
var Hand = /** @class */ (function () {
    function Hand() {
        this.id = Hand.uuid++;
        this.cards = [];
    }
    Hand.prototype.getId = function () {
        return this.id;
    };
    Hand.prototype.getPoints = function () {
        var points = 0;
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var card = _a[_i];
            var point = card.getValue() === 'A' ? cardToPointsMap['A11'] : cardToPointsMap[card.getValue()];
            points += point;
        }
        if (points <= 21) {
            return points;
        }
        points = 0;
        for (var _b = 0, _c = this.cards; _b < _c.length; _b++) {
            var card = _c[_b];
            var point = card.getValue() === 'A' ? cardToPointsMap['A1'] : cardToPointsMap[card.getValue()];
            points += point;
        }
        return points;
    };
    Hand.prototype.addCard = function (card) {
        this.cards.push(card);
    };
    Hand.prototype.isValid = function () {
        return this.getPoints() <= 21;
    };
    Hand.uuid = 1;
    return Hand;
}());
exports.default = Hand;
