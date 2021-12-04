const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')


const onCreate = (event) => {
    event.preventDefault()

    // event.target is the form that caused the submit event
    /*
    const form = event.target
    const formData = getFormFields(form)
    */

    api.newSort()
    .then(data => {
        console.log(data)
        ui.createSuccess(data)
        sessionStorage.setItem('id',`${data.bubbles._id}`)
    })
    .catch(console.error)
}


const onIndex = (event) => {
    event.preventDefault()

    api.indexSort()
    .then(console.log)
    .catch(console.error)
}


const onShow = (event) => {
    event.preventDefault()

    console.log(sessionStorage.getItem('id'))

    /*
    api.showSort(sessionStorage.getItem('id'))
    .then(ui.showSuccess)
    .catch(console.error)
    */
}


const onStep = (event) => {
    event.preventDefault()

    console.log("pressing")

    api.stepSort(sessionStorage.getItem('id'))
    .then(data => {
        
        ui.stepSuccess(data)
    })
    //.then(ui.stepSuccess)
    .catch(console.error)
}


const onDelete = (event) => {
    event.preventDefault()

    api.deleteSort()
    .then(console.log)
    .catch(console.error)
}

module.exports = {
    onCreate,
    onIndex,
    onShow,
    onStep,
    onDelete

}