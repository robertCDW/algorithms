const config = require('../config')

const indexSort = () => {

    return $.ajax({
        method: "GET",
        url: config.apiUrl + "/bubble-sort/"
    })
}

const showSort = (id) => {

    return $.ajax({
        method: "GET",
        url: `/bubble-sort/${id}`
    })
}

const newSort = () => {

    return $.ajax({
        method: "POST",
        url: config.apiUrl + "/bubble-sort/",
        data: {}
    })
}

const stepSort = (id) => {

    return $.ajax({
        method: "PATCH",
        url: config.apiUrl + `/bubble-sort/${id}`
    })
}

const deleteSort = (id) => {

    return $.ajax({
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