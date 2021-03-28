import Boom from '@hapi/boom';
import axios from 'axios'
import querystring from 'querystring'

export let createCard = async (fields: any) => {

    try {
        return await axios.post(`https://api.trello.com/1/cards?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}&${querystring.stringify(fields)}`)
            .then((newCard) => {
                return newCard.data

            }).catch((err) => {
                throw new Error(err)
            })

    } catch (error) {
        console.log("Error: " + error.message)
        throw Boom.badRequest(error.message).output.payload

    }
};

export let updateCard = async (idCard: any, fields: any) => {

    try {
        
        return await axios.put(`https://api.trello.com/1/cards/${idCard}?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}&${querystring.stringify(fields)}`)
            .then((updatedCard) => {
                return updatedCard.data

            }).catch((err) => {
                throw new Error(err)
            })


    } catch (error) {
        console.log("Error: " + error.message)
        throw Boom.badRequest(error.message).output.payload
    }


};

export let deleteCard = async (idCard: any) => {
    try {
        
        return await axios.delete(`https://api.trello.com/1/cards/${idCard}?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}`)
            .then((deletedCard) => {                
                return deletedCard.status

            }).catch((err) => {
                throw new Error(err)
            })


    } catch (error) {
        console.log("Error: " + error.message)
        throw Boom.badRequest(error.message).output.payload
    }
};