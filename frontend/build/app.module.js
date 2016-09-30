"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var login_1 = require("./Login/login");
var login_service_1 = require("./Login/login.service");
var home_1 = require("./Home/home");
var NavigationBar_1 = require("./NavBar/NavigationBar");
var routes_config_1 = require('./Routes/routes.config');
var http_1 = require('@angular/http');
var User_1 = require("./Model/User");
var register_1 = require("./register/register");
var registerService_1 = require("./register/registerService");
var registerModel_1 = require("./register/registerModel");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                routes_config_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_1.LoginComponent,
                home_1.HomeComponent,
                NavigationBar_1.NavigationBar,
                register_1.RegisterComponent
            ],
            providers: [
                login_service_1.LoginService,
                routes_config_1.appRoutingProviders,
                registerService_1.RegisterService,
                User_1.User,
                registerModel_1.RegisterModel
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map