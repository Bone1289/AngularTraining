"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_component_1 = require("./customer/customer.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to AngularJS';
        this.navbarCollapsed = false;
        this.customers = [];
        for (var cust in customer_component_1.CustomerComponent.customers) {
            this.customers.push(customer_component_1.CustomerComponent.customers[cust]);
            console.log("Customer:");
            console.log(cust);
        }
        console.log("Customer:");
        console.log(this.customers);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
