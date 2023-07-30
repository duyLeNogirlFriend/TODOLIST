import axios from '../Axios'

export const getSong = (songId) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios ({
            url: '/api/song',
            method: 'get',
            params: {id: songId}
        })
        resolve(response)
    } catch (error){
        reject(error)
    } 
})

export const getDetailInfoSong = (songId) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios ({
            url: '/api/infosong',
            method: 'get',
            params: {id: songId}
        })
        resolve(response)
    } catch (error){
        reject(error)
    } 
})

