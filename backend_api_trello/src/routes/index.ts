
import { Router } from 'express';
import * as cardsController from '../controllers/cardsController';
import * as checkslists from '../controllers/checkListsController'
import * as checksItems from '../controllers/checkItemsController';


const routes = Router();


export const Routes = () => {
    Cards(routes)
    Checkslists(routes)
    ChecksItems(routes)

    return routes;
}

const Cards = (_routes: any) => {
    _routes.route('/cards')
        .post(cardsController.createCard)
        .get(cardsController.readCards)
        .put(cardsController.updateCard)
        .delete(cardsController.deleteCard)   
}

const Checkslists = (_routes: any) => {
    _routes.route('/checklists')
        .post(checkslists.createCheckList)
        .get(checkslists.readCheckList)
        .put(checkslists.updateCheckList)
        .delete(checkslists.deleteCheckList)   
}

const ChecksItems = (_routes: any) => {
    _routes.route('/checkItems')
        .post(checksItems.createCheckItems)
        .get(checksItems.readCheckItems)
        .put(checksItems.updateCheckItems)
        .delete(checksItems.deleteCheckItems)  
 
}
