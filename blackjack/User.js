"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, balance) {
        this.id = User.uuid++;
        this.name = name;
        this.balance = balance;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getBalance = function () {
        return this.balance;
    };
    User.uuid = 1;
    return User;
}());
exports.default = User;
