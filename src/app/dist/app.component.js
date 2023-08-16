"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var chars_json_1 = require("../assets/json/chars.json");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chart_portfolio';
        this.isOpen = false;
        this.selectedChar = chars_json_1["default"][0];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.addEventListener("keydown", function (e) {
            //You have yout key code here
            if (e.keyCode == 32 && !_this.isOpen) {
                console.log(e);
                console.log(e.keyCode);
                _this.isOpen = !_this.isOpen;
                console.log("llamo changeMenu ");
                _this.changeMenu();
            }
        });
    };
    AppComponent.prototype.changeId = function (id) {
        this.selectedChar = chars_json_1["default"][id];
    };
    AppComponent.prototype.changeMenu = function () {
        var element = document.querySelector('.container');
        if (element != null) {
            element.classList.add('animate__animated', 'animate__backOutUp');
            element.addEventListener('animationend', function change() {
                element.classList.add('hidden');
                console.log("animacion acabada");
                var charDescription = document.querySelector('.char-description');
                if (charDescription != null) {
                    charDescription.classList.remove('hidden');
                    charDescription.classList.remove('animate__animated', 'animate__backOutUp');
                }
            });
        }
    };
    AppComponent.prototype.back = function () {
        this.isOpen = !this.isOpen;
        var charDescription = document.querySelector('.char-description');
        if (charDescription != null) {
            charDescription.classList.add('animate__animated', 'animate__backOutUp');
            charDescription.addEventListener('animationend', function changeBack() {
                charDescription.classList.add('hidden');
                var element = document.querySelector('.container');
                if (element != null) {
                    element.classList.remove('hidden');
                    element.classList.remove('animate__animated', 'animate__backOutUp');
                    console.log("animacion acabada");
                }
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
