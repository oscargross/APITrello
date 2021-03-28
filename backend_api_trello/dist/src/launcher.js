"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Launcher = void 0;
var routes_1 = require("./routes");
var app_1 = require("./app");
var Launcher = function () {
    app_1.InitApp(routes_1.Routes());
};
exports.Launcher = Launcher;
