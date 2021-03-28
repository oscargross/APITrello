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
// --url 'https://api.trello.com/1/cards/{id}/checklists?key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548'
// --url 'https://api.trello.com/1/checklists/{id}/checkItems?key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548'
