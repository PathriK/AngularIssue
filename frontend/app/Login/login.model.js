"use strict";
var LoginModel = (function () {
    function LoginModel(userName, password) {
        if (userName === void 0) { userName = ''; }
        if (password === void 0) { password = ''; }
        this.userName = userName;
        this.password = password;
    }
    return LoginModel;
}());
exports.LoginModel = LoginModel;
//# sourceMappingURL=login.model.js.map