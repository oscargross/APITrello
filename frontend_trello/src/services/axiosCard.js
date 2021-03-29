import axios from 'axios'
import querystring from 'querystring'

export const post = async ({ data, query }) => {

    return await axios({
        method: 'get',
        url: `https://api--trello.herokuapp.com/`,
        // url: `https://api.trello.com/1/boards/7GQzKJOi/cards?key=&token=`,
        data: data
    }).then((res) => {

        if (res.status) {
            return { error: false, message: res.data }
        }
        return { error: true }
    });

}

export const get = async ({ query }) => {

    axios({
        method: 'get',
        url: `https://api--trello.herokuapp.com/`,

        // url: `https://api.trello.com/1/boards/7GQzKJOi/cards?key=&token=`,
    }).then((res) => {
        if (res.status) {
            return { error: false }
        }
        return { error: true }
    });
}

export const getCards = async () => {

    return await axios({
        method: 'get',
        url: `https://api--trello.herokuapp.com/`,

        // url: `https://api.trello.com/1/boards/7GQzKJOi/cards?key=&token=`,
    }).then((res) => {
        return { error: false , message: res.data }
        
    });
}


export const getChecklists = async (idCard) => {
    return await axios({
        method: 'get',
      url: `https://api--trello.herokuapp.com/`,

        // url: `https://api.trello.com/1/boards/7GQzKJOi/cards?key=&token=`,
    }).then((res) => {
        return { error: false , message: res.data }
        
    });
}
