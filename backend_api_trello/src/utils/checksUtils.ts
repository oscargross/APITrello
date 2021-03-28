import Boom from '@hapi/boom';
import axios from 'axios'
import { config as dotenv } from 'dotenv'
dotenv()

export const findFieldCheck = async ({ nameField , idfieldFather, fieldFather, fieldSearched }: any) => {
    try {
        return await axios.get(`https://api.trello.com/1/${fieldFather}/${idfieldFather}/${fieldSearched}?key=${process.env.KEY_API_TRELLO}&token=${process.env.TOKEN_API_TRELLO}`)
            .then(async (lists) => {               
                               
                if (nameField){
                    const fieldFiltered = await lists.data.find((list: any) => { return list.name == nameField }) 

                    if(fieldFiltered){
                        return fieldFiltered
                    } 
                    throw new Error ('Not Found')
                }
                return lists.data
            })
    } catch (error) {
        console.log("Error: " + error.message)
        throw Boom.badRequest(error.message).output.payload
    }
}