"use strict";
var router_1 = require('@angular/router');
var login_1 = require("../Login/login");
var home_1 = require("../Home/home");
var register_1 = require("../register/register");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'register', component: register_1.RegisterComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routes.config.js.map