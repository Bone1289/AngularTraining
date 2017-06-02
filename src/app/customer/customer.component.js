"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Customer_1 = require("./Customer");
var CustomerComponent = CustomerComponent_1 = (function () {
    function CustomerComponent() {
        this.customerId = -1;
        //this.customer = new Customer(1234, "Harry","Potter","harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
        this.customer = CustomerComponent_1.customers[this.customerId];
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.customer = CustomerComponent_1.customers[this.customerId];
    };
    return CustomerComponent;
}());
CustomerComponent.customers = {
    "1234": new Customer_1.Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185"),
    "1235": new Customer_1.Customer(1235, "Ron", "Weasley", "ron.weasley@hogwarts.ac.uk", "+44 0206-931-9381"),
    "1236": new Customer_1.Customer(1236, "Hermione", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206-931-9031")
};
__decorate([
    core_1.Input()
], CustomerComponent.prototype, "customerId", void 0);
CustomerComponent = CustomerComponent_1 = __decorate([
    core_1.Component({
        selector: 'customer',
        templateUrl: './customer.component.html',
        styleUrls: ['./customer.component.css']
    })
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
var CustomerComponent_1;
