'use strict'

const populateNumbers = (arr) => {
    console.log(arr)
    let str = ""
    
    arr.forEach(element => {
        str += `<div class="sort-medium">${element}</div>`
    });

    $('#visualize').html(str)
}

const createSuccess = (data) => {
    populateNumbers(data.bubbles.last.arr)
}

const stepSuccess = (data) => {
    populateNumbers(data.sortState.last.arr)
}

const indexSuccess = (data) => {
    populateNumbers(data.bubbles.last.arr)
}

const showSuccess = (data) => {
    populateNumbers(data.bubbles.last.arr)
}

const deleteSuccess = () => {
    populateNumbers([])
}


module.exports = {
    createSuccess,
    stepSuccess,
    indexSuccess,
    showSuccess,
    deleteSuccess
}