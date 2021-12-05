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
        ui.createSuccess(data)
        sessionStorage.setItem('id',`${data.bubbles._id}`)
    })
    .catch(console.error)
}


const onIndex = (event) => {
    event.preventDefault()

    api.indexSort()
    .then(data => {
        ui.indexSuccess(data.bubbleSorts)
    })
    .catch(console.error)
}


const onShow = (event) => {
    event.preventDefault()

    // const form = event.target
    // const formData = getFormFields(form)

    sessionStorage.setItem('id', event.target.form.name)

    api.showSort(sessionStorage.getItem('id'))
    .then(ui.showSuccess)
    .catch(console.error)
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

    // setting the session storage value to ensure it's present later when deleting the id key
    sessionStorage.setItem('id', event.target.form.name)

    api.deleteSort(sessionStorage.getItem('id'))
    .then(() => {
        sessionStorage.removeItem('id')

        api.indexSort()
        .then(data => {
            ui.indexSuccess(data.bubbleSorts)
        })
        .catch(console.error)

    })
    .catch(console.error)
}

module.exports = {
    onCreate,
    onIndex,
    onShow,
    onStep,
    onDelete

}