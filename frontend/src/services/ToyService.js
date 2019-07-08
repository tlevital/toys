import axios from 'axios'

export default {
    query,
    remove,
    getById,
    save,
}

function query() {
    // return Promise.resolve(dbJson)
    return axios.get(_getUrl())
        .then(res => res.data)
}

function getById(toyId) {
    // console.log('toyId getById:', toyId);
    return axios.get(_getUrl(toyId))
        .then(res => res.data)
        // .then(res => { return res.data })
}

function remove(toyId) {
    // console.log('toyId:', toyId);
    return axios.delete(_getUrl(toyId))
        .then(res => res.data)
}

function save(toy) {
    // console.log('Save toy at service:', toy);
    if (toy._id) {
        return axios.put(_getUrl(toy._id), toy)
            .then(res => res.data)
    } else {
        return axios.post(_getUrl(), toy)
            .then(res => res.data)
    }
}

function _getUrl(id = '') {
    return `http://localhost:3000/toy/${id}`
}

// const​ ​BASE_URL​ = (​process​.​env​.​NODE_ENV​ !== ​'development'​)
// ? ​'/api/toy'
// : ​'//localhost:3000/api/toy'​;