import Boom from '@hapi/boom';
import axios from 'axios'
import querystring from 'querystring'

export let createCheckItem = async (idCheckList: any, fields: any) => {

    try {
        return await axios.post(`https://api.trello.com/1/checklists/${idCheckList}/checkItems?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}&${querystring.stringify(fields)}`)
            .then((newCheckItem) => {
                return newCheckItem.data

            }).catch((err) => {
                throw new Error(err)
            })
    } catch (error) {
        console.log("Error: " + error.message)
        throw Boom.badRequest(error.message).output.payload
    }
};

export let updateCheckItem = async (idCard: any, idCheckItem: any, fields: any) => {
    try {        
        return await axios.put(`https://api.trello.com/1/cards/${idCard}/checkItem/${idCheckItem}?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}&${querystring.stringify(fields)}`)
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

export let deleteCheckItem = async (idChecklist: any, idCheckItem: any) => {
    try {
        
        return await axios.delete(`https://api.trello.com/1/checklists/${idChecklist}/checkItems/${idCheckItem}?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}`)
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