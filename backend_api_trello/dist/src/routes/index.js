"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var express_1 = require("express");
var cardsController = __importStar(require("../controllers/cardsController"));
var checkslists = __importStar(require("../controllers/checkListsController"));
var checksItems = __importStar(require("../controllers/checkItemsController"));
var routes = express_1.Router();
var Routes = function () {
    Cards(routes);
    Checkslists(routes);
    ChecksItems(routes);
    return routes;
};
exports.Routes = Routes;
var Cards = function (_routes) {
    _routes.route('/cards')
        .post(cardsController.createCard)
        .get(cardsController.readCards)
        .put(cardsController.updateCard)
        .delete(cardsController.deleteCard);
};
var Checkslists = function (_routes) {
    _routes.route('/checklists')
        .post(checkslists.createCheckList)
        .get(checkslists.readCheckList)
        .put(checkslists.updateCheckList)
        .delete(checkslists.deleteCheckList);
};
var ChecksItems = function (_routes) {
    _routes.route('/checkItems')
        .post(checksItems.createCheckItems)
        .get(checksItems.readCheckItems)
        .put(checksItems.updateCheckItems)
        .delete(checksItems.deleteCheckItems);
};
