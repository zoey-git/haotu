import axios from 'axios'

export const GET = async (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then((res=> {
            resolve(res.data)
        })).catch((error) => {
            reject(error)
        })
    })
}

export const POST= async (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res=> {
            resolve(res.data)
        })).catch((error) => {
            reject(error)
        })
    })
}
