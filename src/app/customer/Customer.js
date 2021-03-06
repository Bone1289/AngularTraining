"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    // constructor(public firstName, public midleName, public lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.fullName = firstName + " " + midleName + " " + lastName;
    //     console.log("Customer was created");
    // }
    function Customer(custtomerId, firstName, lastName, email, phoneNumber) {
        if (custtomerId === void 0) { custtomerId = -1; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        if (phoneNumber === void 0) { phoneNumber = ''; }
        this._customerID = -1;
        this._firstName = '';
        this._lastName = '';
        this._email = '';
        this._phoneNumber = '';
        this._birthDate = new Date();
        this.fullName = '';
        this._customerID = custtomerId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }
    Object.defineProperty(Customer.prototype, "customerId", {
        get: function () {
            return this._customerID;
        },
        set: function (customerId) {
            this._customerID = customerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (phoneNumber) {
            this._phoneNumber = phoneNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (birthDate) {
            this._birthDate = birthDate;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
