import Boom from '@hapi/boom';
import { Request, Response } from 'express'
import * as checkItem from '../services/checkItemService'
import { findFieldCheck } from '../utils/checksUtils'
import { findField } from '../utils/cardUtils'


export let createCheckItems = async (req: Request, res: Response) => {
    const { nameCard, nameCheckList } = req.query
    const { body: info } = req

    await findField({ nameField: nameCard, field: 'cards' })
        .then(async (card) => {

            const idCard = card.id
            await findFieldCheck(
                {
                    nameField: nameCheckList,
                    fieldFather: 'cards',
                    idfieldFather: idCard,
                    fieldSearched: 'checklists'
                })
                .then(async (checkListFound) => {
                    const idCheckListFound = checkListFound.id

                    return checkItem.createCheckItem(idCheckListFound, info)
                        .then(result => res.status(200).json(result))

                })

        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))

};
export let updateCheckItems = async (req: Request, res: Response) => {
    const { nameCard, nameCheckList, nameCheckItems } = req.query
    const { body: info } = req

    await findField({ nameField: nameCard, field: 'cards' })
        .then(async (card) => {

            const idCard = card.id
            await findFieldCheck(
                {
                    nameField: nameCheckList,
                    fieldFather: 'cards',
                    idfieldFather: idCard,
                    fieldSearched: 'checklists'
                })
                .then(async (checkListFound) => {
                    const idCheckListFound = checkListFound.id
                    await findFieldCheck(
                        {
                            nameField: nameCheckItems,
                            fieldFather: 'checklists',
                            idfieldFather: idCheckListFound,
                            fieldSearched: 'checkItems'
                        })
                        .then((checkItemsFound) => {
                            const idCheckItemsFound = checkItemsFound.id

                            return checkItem.updateCheckItem(idCard, idCheckItemsFound, info)
                                .then(result => res.status(200).json(result))

                        })
                })

        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))
};

export let readCheckItems = async (req: Request, res: Response) => {
    const { nameCard, nameCheckList, nameCheckItem } = req.query;

    await findField({ nameField: nameCard, field: 'cards' })
        .then(async (card) => {

            const idCard = card.id

            await findFieldCheck(
                {
                    nameField: nameCheckList,
                    fieldFather: 'cards',
                    idfieldFather: idCard,
                    fieldSearched: 'checklists'
                })
                .then(async (checkListFound) => {
                    const idCheckListFound = checkListFound.id
                    await findFieldCheck(
                        {
                            nameField: nameCheckItem,
                            fieldFather: 'checklists',
                            idfieldFather: idCheckListFound,
                            fieldSearched: 'checkItems'
                        })
                        .then(result => res.status(200).json(result))
                })
        })
        .catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))


};
export let deleteCheckItems = async (req: Request, res: Response) => {
    const { nameCard, nameCheckList, nameCheckItem } = req.query;

    await findField({ nameField: nameCard, field: 'cards' })
        .then(async (card) => {

            const idCard = card.id

            await findFieldCheck(
                {
                    nameField: nameCheckList,
                    fieldFather: 'cards',
                    idfieldFather: idCard,
                    fieldSearched: 'checklists'
                })
                .then(async (checkListFound) => {
                    const idCheckListFound = checkListFound.id
                    await findFieldCheck(
                        {
                            nameField: nameCheckItem,
                            fieldFather: 'checklists',
                            idfieldFather: idCheckListFound,
                            fieldSearched: 'checkItems'
                        })
                        .then((checkItemsFound) => {
                            const idCheckItemsFound = checkItemsFound.id

                            return checkItem.deleteCheckItem(idCheckListFound, idCheckItemsFound)
                                .then(result => res.status(200).json(result))
                        })
                })


        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))

};
