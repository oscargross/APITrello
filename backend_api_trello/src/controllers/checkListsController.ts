import Boom from '@hapi/boom';
import { Request, Response } from 'express'
import * as checkList from '../services/checkListService'
import { findFieldCheck } from '../utils/checksUtils'
import { findField } from '../utils/cardUtils'


export let createCheckList = async (req: Request, res: Response) => {
    const { nameCard } = req.query
    const { body: info } = req

    await findField({ nameField: nameCard, field: 'cards' })
        .then((card) => {

            const idCard = card.id
            const fields = { ...info, idCard }
            
            return checkList.createCheckList(fields)
                .then(result => res.status(201).json(result))


        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))
};

export let updateCheckList = async (req: Request, res: Response) => {
    const { nameCheckList, nameCard } = req.query;
    const info = req.body;

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
                .then((checkListFound) => {

                    const checkListId = checkListFound.id
                    return checkList.updateCheckList(checkListId, info)
                        .then(result => res.status(200).json(result))
                })
                
        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))
};

export let readCheckList = async (req: Request, res: Response) => {
    const { nameCard, nameCheckList } = req.query;

    await findField({ nameField: nameCard, field: 'cards' })
        .then(async card => {
            const idCard = card.id

            await findFieldCheck(
                {
                    nameField: nameCheckList,
                    fieldFather: 'cards',
                    idfieldFather: idCard,
                    fieldSearched: 'checklists'
                }).then(result => res.status(200).json(result))
        })
        .catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))
};

export let deleteCheckList = async (req: Request, res: Response) => {
    const { nameCheckList, nameCard } = req.query;

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
                .then((checkListFound) => {

                    const checkListId = checkListFound.id
                    return checkList.deleteCheckList(checkListId)
                        .then(result => res.status(200).json(result))
                })
        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))
};