'use strict'

const populateNumbers = (arr) => {
    console.log(arr)
    let str = `<form><button class="btn btn-light sort-step">Step</button>`
    
    arr.forEach(element => {
        str += `<div class="sort-medium col-2">${element}</div>`
    });
    str += "</form><br>"

    $('#visualize').html(str)
}

const populateNumbersIndex = (arrays) => {

    let str = ""

    // each outer loop will be for a bubble object
    // need to create a select(show) button and a delete button
    // need to populate the arrays
    // select button will be used for show command
    // delete button will be used to destroy
    // then need to start a new line
    for (let i = 0; i < arrays.length; i++) {
        str += `<form class="bubbles" name="${arrays[i]._id}"><button class="sort-show btn btn-success">Select</button><button class="sort-delete btn btn-danger">Delete</button>`
        arrays[i].last.arr.forEach(element => {
            str += `<div class="sort-medium col-2">${element}</div>`
        });
        str += `</form><br><br><br>`
    }

    $('#visualize').html(str)
}

const createSuccess = (data) => {
    populateNumbers(data.bubbles.last.arr)
    $('form').trigger('reset')
    $('#create-drop').html("")
}

const stepSuccess = (data) => {
    populateNumbers(data.sortState.last.arr)
}

const indexSuccess = (data) => {
    populateNumbersIndex(data)
}

const showSuccess = (data) => {
    populateNumbers(data.bubbleSort.last.arr)
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