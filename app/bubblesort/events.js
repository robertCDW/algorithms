const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')


const onCreate = (event) => {
    event.preventDefault()

    const form = event.target.form

    let arr = []

    for (let i = 2; i < Number(sessionStorage.getItem('count')) + 2; i++) {
        if (form[i].value.length == 0) {
            arr.push(Number(form[i].placeholder))
        } else {
            arr.push(Number(form[i].value))
        }
    }

    const formData = {
        arr
    }

    console.log(formData.arr)

    api.newSort(formData)
    .then(data => {
        ui.createSuccess(data)
        sessionStorage.setItem('id',`${data.bubbles._id}`)
    })
    .catch(console.error)
}


const onIndex = (event) => {
    event.preventDefault()

    $('#create-drop').html("")

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