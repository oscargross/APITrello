"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitApp = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = require("dotenv");
dotenv_1.config();
var app = express_1.default();
var InitApp = function (routes) {
    app.use(express_1.default.json());
    app.use(routes);
    app.use(cors_1.default());
    app.listen(process.env.PORT || 3333, function () {
        console.info("Listenning server");
    })
        .on('error', function (err) {
        console.info("Err: Error listen server: " + err);
    });
};
exports.InitApp = InitApp;
