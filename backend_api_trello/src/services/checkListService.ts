import Boom from '@hapi/boom';
import axios from 'axios'
import querystring from 'querystring'

export let createCheckList = async (fields: any) => {
    try {
        return await axios.post(`https://api.trello.com/1/checklists?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}&${querystring.stringify(fields)}`)
            .then((newCheckList) => {
                return newCheckList.data

            }).catch((err) => {
                throw new Error(err)
            })

    } catch (error) {
        console.log("Error: " + error.message)
        throw Boom.badRequest(error.message).output.payload
    }
};

export let updateCheckList = async (idCheckList: any, fields: any) => {
    try {        
        return await axios.put(`https://api.trello.com/1/checklists/${idCheckList}?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}&${querystring.stringify(fields)}`)
            .then((updatedCheckList) => {
                return updatedCheckList.data

            }).catch((err) => {
                throw new Error(err)
            })

    } catch (error) {
        console.log("Error: " + error.message)
        throw Boom.badRequest(error.message).output.payload
    }
};

export let deleteCheckList = async (idCheckList: any) => {
    try {
        
        return await axios.delete(`https://api.trello.com/1/checklists/${idCheckList}?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}`)
        .then((deletedCheckList) => {                
            return deletedCheckList.status

            }).catch((err) => {
                throw new Error(err)
            })

    } catch (error) {
        console.log("Error: " + error.message)
        throw Boom.badRequest(error.message).output.payload
    }
};