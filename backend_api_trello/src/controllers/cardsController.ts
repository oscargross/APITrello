import Boom from '@hapi/boom';
import { Request, Response } from 'express'
import * as cardService from '../services/cardService'
import { findField } from '../utils/cardUtils'


export let createCard = async (req: Request, res: Response) => {
    const { nameList } = req.query
    const { body: info } = req

    await findField({ nameField: nameList, field: 'lists' })
        .then((list) => {

            const idList = list.id
            const fields = { ...info, idList }
            return cardService.createCard(fields)
                .then(result => res.status(201).json(result))

        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))

};
export let updateCard = async (req: Request, res: Response) => {
    const { nameCard } = req.query;
    const info = req.body;

    await findField({ nameField: nameCard, field: 'cards' })
        .then((card) => {

            const idCard = card.id
            return cardService.updateCard(idCard, info)
                .then(result => res.status(200).json(result))


        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))
};
export let readCards = async (req: Request, res: Response) => {
    const { nameCard } = req.query;

    await findField({nameField: nameCard, field: 'cards' })
        .then(result => res.status(200).json(result))

        .catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
            res.status(400).json(Boom.notFound('Parameter not found').output.payload))


};
export let deleteCard = async (req: Request, res: Response)=>  {
    const { nameCard } = req.query;

    await findField({ nameField: nameCard, field: 'cards' })
        .then((card) => {
            
            const idCard = card.id

            return cardService.deleteCard(idCard)
                .then(result => res.status(200).json(result))


        }).catch(error =>
            error.statusCode ? res.status(error.statusCode).json(error) :
                res.status(400).json(Boom.notFound('Parameter not found').output.payload))

};
