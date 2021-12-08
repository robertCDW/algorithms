'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const showSignUp = () => {

}

const showSignIn = () => {

}

const showChangePassword = () => {

}

const showCancel = () => {

}

const onSignUp = (event) => {

    event.preventDefault()
    
    const form = event.target.form

    const formData = {
        credentials: {
            email: form[0].value,
            password: form[1].value,
            password_confirmation: form[2].value
        }
    }

    api.signUp(formData)
    .then(data => {
        ui.signUpSuccess(data)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {

    event.preventDefault()

    const form = event.target.form

    const formData = {
        credentials: {
            email: form[0].value,
            password: form[1].value
        }
    }

    api.signIn(formData)
    .then(data => {

        sessionStorage.setItem('user', data.user._id)
        sessionStorage.setItem('token', data.user.token)
        
        ui.signInSuccess(data)
    })
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {

    event.preventDefault()

    // console.log(event.target)

    const formData = {
        passwords: {
            old: event.target.form[0].value,
            new: event.target.form[1].value
        }
    }

    api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const signOut = (event) => {

    event.preventDefault()

    api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
    showSignUp,
    showSignIn,
    showChangePassword,
    onSignUp,
    onSignIn,
    onChangePassword,
    signOut,
    showCancel,
}
