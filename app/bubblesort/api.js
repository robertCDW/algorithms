const config = require('../config')

const indexSort = () => {

    return $.ajax({
        headers: { "Authorization": 'Bearer ' + sessionStorage.getItem('token') },
        method: "GET",
        url: config.apiUrl + "/bubble-sort/"
    })
}

const showSort = (id) => {

    return $.ajax({
        headers: { "Authorization": 'Bearer ' + sessionStorage.getItem('token') },
        method: "GET",
        url: config.apiUrl + `/bubble-sort/${id}`
    })
}

const newSort = (formData) => {

    return $.ajax({
        headers: { "Authorization": 'Bearer ' + sessionStorage.getItem('token') },
        method: "POST",
        url: config.apiUrl + "/bubble-sort/",
        data: formData
    })
}

const stepSort = (id) => {

    return $.ajax({
        headers: { "Authorization": 'Bearer ' + sessionStorage.getItem('token') },
        method: "PATCH",
        url: config.apiUrl + `/bubble-sort/${id}`
    })
}

const deleteSort = (id) => {

    return $.ajax({
        headers: { "Authorization": 'Bearer ' + sessionStorage.getItem('token') },
        method: "DELETE",
        url: config.apiUrl + `/bubble-sort/${id}`
    })
}

module.exports = {
    indexSort,
    showSort,
    newSort,
    stepSort,
    deleteSort
}